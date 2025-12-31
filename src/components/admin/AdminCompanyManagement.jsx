import React, { useState } from 'react';
import { FaTrash, FaEdit, FaPlus, FaTimes, FaEnvelope, FaKey, FaBuilding } from 'react-icons/fa';
import '../Dashboard.css';

const AdminCompanyManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
  const [currentCompanyId, setCurrentCompanyId] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    plan: 'Basic'
  });

  const [companies, setCompanies] = useState([
    { id: 1, name: 'Green Valley School', email: 'contact@greenvalley.edu', status: 'Active', plan: 'Pro', revenue: '$1,200', adminEmail: 'admin@greenvalley.edu' },
    { id: 2, name: 'Metro College', email: 'info@metrocollege.com', status: 'Pending', plan: 'Free', revenue: '$0', adminEmail: 'admin@metro.edu' },
    { id: 3, name: 'Tech Academy', email: 'hello@techacademy.com', status: 'Active', plan: 'Enterprise', revenue: '$3,500', adminEmail: 'director@tech.com' },
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openAddModal = () => {
    setModalMode('add');
    setFormData({ name: '', email: '', password: '', plan: 'Basic' });
    setShowModal(true);
  };

  const openEditModal = (company) => {
    setModalMode('edit');
    setCurrentCompanyId(company.id);
    setFormData({
      name: company.name,
      email: company.adminEmail,
      password: '', // Don't show existing password
      plan: company.plan
    });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalMode === 'add') {
      const newCompany = {
        id: companies.length + 1,
        name: formData.name,
        email: formData.email,
        adminEmail: formData.email,
        status: 'Active',
        plan: formData.plan,
        revenue: formData.plan === 'Free' ? '$0' : formData.plan === 'Pro' ? '$999' : '$2,500'
      };
      setCompanies([...companies, newCompany]);
    } else {
      setCompanies(companies.map(c => c.id === currentCompanyId ? {
        ...c,
        name: formData.name,
        adminEmail: formData.email,
        plan: formData.plan
      } : c));
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this company? This will remove all associated data.")) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active': return 'status-badge active';
      case 'Pending': return 'status-badge pending';
      case 'Suspended': return 'status-badge suspended';
      default: return 'status-badge neutral';
    }
  };

  return (
    <div>
      <div className="table-header">
        <h3>Company Management</h3>
        <button className="btn-primary" onClick={openAddModal}>
          <FaPlus style={{ marginRight: '8px' }} /> Add Company
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Admin Email</th>
              <th>Current Plan</th>
              <th>Revenue</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: 600, color: '#003366' }}>{c.name}</td>
                <td>{c.adminEmail}</td>
                <td>
                  <span style={{
                    padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid #e5e7eb',
                    background: '#f9fafb', color: '#374151'
                  }}>
                    {c.plan}
                  </span>
                </td>
                <td>{c.revenue}</td>
                <td>
                  <span className={getStatusClass(c.status)}>
                    {c.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                  <button className="btn-icon" title="Edit Details" onClick={() => openEditModal(c)}><FaEdit /></button>
                  <button className="btn-icon delete" onClick={() => handleDelete(c.id)} title="Remove"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{modalMode === 'add' ? 'Onboard New Company' : 'Edit Company Details'}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="modal-close-btn"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label><FaBuilding style={{ marginRight: '5px', color: '#6b7280' }} /> Company Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. Acme Education" />
              </div>

              <div className="form-group">
                <label><FaEnvelope style={{ marginRight: '5px', color: '#6b7280' }} /> Admin Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="admin@company.com" />
              </div>

              {modalMode === 'add' && (
                <div className="form-group">
                  <label><FaKey style={{ marginRight: '5px', color: '#6b7280' }} /> Default Password</label>
                  <input type="text" name="password" value={formData.password} onChange={handleInputChange} required placeholder="Generate default password" />
                </div>
              )}

              <div className="form-group">
                <label>Plan Selection</label>
                <select name="plan" value={formData.plan} onChange={handleInputChange}>
                  <option value="Free">Free Tier</option>
                  <option value="Pro">Pro Plan</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">{modalMode === 'add' ? 'Create Account' : 'Save Changes'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCompanyManagement;