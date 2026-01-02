
import React, { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaPlus, FaTimes, FaEnvelope, FaKey, FaBuilding, FaCheckCircle, FaExclamationCircle, FaCrown, FaFilter, FaBroom } from 'react-icons/fa';
import '../Dashboard.css';

const AdminCompanyManagement = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [currentCompanyId, setCurrentCompanyId] = useState(null);
    const [statusFilter, setStatusFilter] = useState('All');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        activatePremium: false
    });


    const [companies, setCompanies] = useState([
        {
            id: 1,
            name: 'Green Valley School',
            email: 'admin@greenvalley.edu',
            plan: 'Premium',
            status: 'Active',
            joinedDate: '2023-11-15',
            trialEndsIn: 0
        },
        {
            id: 2,
            name: 'Metro College',
            email: 'admin@metro.edu',
            plan: 'Trial',
            status: 'Active',
            joinedDate: new Date().toISOString().split('T')[0],
            trialEndsIn: 7
        },
        {
            id: 3,
            name: 'Tech Academy',
            email: 'director@tech.com',
            plan: 'Trial',
            status: 'Expired',
            joinedDate: '2023-12-01',
            trialEndsIn: -25
        },
        {
            id: 4,
            name: 'Old Institute',
            email: 'admin@old.edu',
            plan: 'Trial',
            status: 'Expired',
            joinedDate: '2023-10-01',
            trialEndsIn: -60
        },
    ]);


    const [upgradeRequests, setUpgradeRequests] = useState([
        { id: 101, companyId: 2, companyName: 'Metro College', requestDate: '2024-01-02' }
    ]);

    const handleInputChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const openAddModal = () => {
        setModalMode('add');
        setFormData({ name: '', email: '', password: '', activatePremium: false });
        setShowModal(true);
    };

    const openEditModal = (company) => {
        setModalMode('edit');
        setCurrentCompanyId(company.id);
        setFormData({
            name: company.name,
            email: company.email,
            password: '',
            activatePremium: company.plan === 'Premium'
        });
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (modalMode === 'add') {
            const isPremium = formData.activatePremium;
            const newCompany = {
                id: companies.length + 1,
                name: formData.name,
                email: formData.email,
                plan: isPremium ? 'Premium' : 'Trial',
                status: isPremium ? 'Active' : 'Active',
                joinedDate: new Date().toISOString().split('T')[0],
                trialEndsIn: isPremium ? 0 : 7
            };
            setCompanies([...companies, newCompany]);
        } else {
            setCompanies(companies.map(c => c.id === currentCompanyId ? {
                ...c,
                name: formData.name,
                email: formData.email,
                plan: formData.activatePremium ? 'Premium' : 'Trial',
            } : c));
        }
        setShowModal(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this company? This will remove all associated data.")) {
            setCompanies(companies.filter(c => c.id !== id));
        }
    };

    const handleBulkDeleteExpired = () => {
        const expiredCount = companies.filter(c => c.plan === 'Trial' && (c.status === 'Expired' || c.trialEndsIn < 0)).length;
        if (expiredCount === 0) {
            alert("No expired trial companies found.");
            return;
        }
        if (window.confirm(`Are you sure you want to delete ALL ${expiredCount} expired trial companies ? This cannot be undone.`)) {
            setCompanies(companies.filter(c => !(c.plan === 'Trial' && (c.status === 'Expired' || c.trialEndsIn < 0))));
        }
    };

    const handleUpgrade = (id) => {
        if (window.confirm("Upgrade this company to Premium Plan? Invoice will be sent automatically.")) {
            setCompanies(companies.map(c => c.id === id ? { ...c, plan: 'Premium', status: 'Active', trialEndsIn: 0 } : c));
            setUpgradeRequests(upgradeRequests.filter(r => r.companyId !== id));
        }
    };

    const getStatusBadge = (company) => {
        if (company.plan === 'Premium') {
            return (
                <span className="status-badge active" style={{ backgroundColor: '#FFD700', color: '#854D0E', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaCrown size={12} /> Premium - Full Access
                </span>
            );
        } else if (company.plan === 'Trial') {
            if (company.status === 'Expired' || company.trialEndsIn < 0) {
                return (
                    <span className="status-badge suspended" style={{ backgroundColor: '#fee2e2', color: '#991b1b', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaExclamationCircle size={12} /> Trial Expired
                    </span>
                );
            }
            return (
                <span className="status-badge active" style={{ backgroundColor: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FaCheckCircle size={12} /> Trial - {company.trialEndsIn} Days Left
                </span>
            );
        }
        return <span className="status-badge neutral">{company.status}</span>;
    };

    const filteredCompanies = companies.filter(c => {
        if (statusFilter === 'All') return true;
        if (statusFilter === 'Premium') return c.plan === 'Premium';
        if (statusFilter === 'Trial') return c.plan === 'Trial' && c.trialEndsIn >= 0 && c.status !== 'Expired';
        if (statusFilter === 'Expired') return c.plan === 'Trial' && (c.trialEndsIn < 0 || c.status === 'Expired');
        return true;
    });

    return (
        <div>
            <div className="table-header" style={{ marginBottom: '1rem' }}>
                <h3>Company Management</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-secondary" onClick={handleBulkDeleteExpired} style={{ color: '#dc2626', borderColor: '#fee2e2', background: '#fef2f2' }}>
                        <FaBroom style={{ marginRight: '8px' }} /> Clear Expired Trials
                    </button>
                    <button className="btn-primary" onClick={openAddModal}>
                        <FaPlus style={{ marginRight: '8px' }} /> Add Company
                    </button>
                </div>
            </div>


            {upgradeRequests.length > 0 && (
                <div style={{ marginBottom: '20px', padding: '15px', background: '#e0f2fe', border: '1px solid #7dd3fc', borderRadius: '8px', color: '#0c4a6e' }}>
                    <h4 style={{ margin: '0 0 10px 0', display: 'flex', alignItems: 'center', gap: '8px' }}><FaBuilding /> Pending Upgrade Requests</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {upgradeRequests.map(req => (
                            <li key={req.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '10px', borderRadius: '6px', marginBottom: '8px' }}>
                                <span><strong>{req.companyName}</strong> requested upgrade on {req.requestDate}</span>
                                <button
                                    className="btn-primary"
                                    style={{ padding: '5px 10px', fontSize: '0.85rem' }}
                                    onClick={() => handleUpgrade(req.companyId)}
                                >
                                    Approve Upgrade
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                {['All', 'Premium', 'Trial', 'Expired'].map(status => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        style={{
                            padding: '6px 16px',
                            borderRadius: '20px',
                            border: '1px solid',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            backgroundColor: statusFilter === status ? '#003366' : 'white',
                            color: statusFilter === status ? 'white' : '#6b7280',
                            borderColor: statusFilter === status ? '#003366' : '#e5e7eb',
                            fontWeight: statusFilter === status ? 'bold' : 'normal',
                            transition: 'all 0.2s'
                        }}
                    >
                        {status}
                    </button>
                ))}
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Owner Email</th>
                            <th>Status / Plan</th>
                            <th>Joined Date</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCompanies.length > 0 ? filteredCompanies.map(c => (
                            <tr key={c.id}>
                                <td style={{ fontWeight: 600, color: '#003366' }}>{c.name}</td>
                                <td>{c.email}</td>
                                <td>
                                    {getStatusBadge(c)}
                                </td>
                                <td>{c.joinedDate}</td>
                                <td style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                    {c.plan !== 'Premium' && (
                                        <button
                                            className="btn-secondary"
                                            style={{ padding: '4px 8px', fontSize: '0.75rem' }}
                                            onClick={() => handleUpgrade(c.id)}
                                            title="Manual Upgrade to Premium"
                                        >
                                            Upgrade
                                        </button>
                                    )}
                                    <button className="btn-icon" title="Edit Details" onClick={() => openEditModal(c)}><FaEdit /></button>
                                    <button className="btn-icon delete" onClick={() => handleDelete(c.id)} title="Remove"><FaTrash /></button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: 'center', padding: '20px', color: '#6b7280' }}>
                                    No companies found with status: <strong>{statusFilter}</strong>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


            <div style={{ marginTop: '30px', padding: '20px', background: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <h3 style={{ marginBottom: '15px', color: '#1f2937' }}>Subscription Configuration</h3>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '250px', padding: '15px', background: '#f9fafb', borderRadius: '6px', border: '1px solid #f3f4f6' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#374151' }}>Trial Plan Settings</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                            <span style={{ color: '#6b7280' }}>Duration:</span>
                            <span style={{ fontWeight: 'bold' }}>7 Days (Locked)</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span style={{ color: '#6b7280' }}>Student Limit:</span>
                            <span style={{ fontWeight: 'bold' }}>50 Students</span>
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: '250px', padding: '15px', background: '#fffbeb', borderRadius: '6px', border: '1px solid #fef3c7' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#92400e' }}>Premium Plan Settings</h4>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                            <span style={{ color: '#6b7280' }}>Pricing:</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>₹ 999 / mo</span>
                                <FaEdit style={{ cursor: 'pointer', color: '#9ca3af' }} size={12} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span style={{ color: '#6b7280' }}>Student Limit:</span>
                            <span style={{ fontWeight: 'bold' }}>Unlimited</span>
                        </div>
                    </div>
                </div>
            </div>


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
                                <label><FaEnvelope style={{ marginRight: '5px', color: '#6b7280' }} /> Owner Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="principal@company.com" />
                            </div>

                            {modalMode === 'add' && (
                                <div className="form-group">
                                    <label><FaKey style={{ marginRight: '5px', color: '#6b7280' }} /> Temporary Password</label>
                                    <input type="text" name="password" value={formData.password} onChange={handleInputChange} required placeholder="Generate temp password" />
                                </div>
                            )}

                            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                <input
                                    type="checkbox"
                                    id="activatePremium"
                                    name="activatePremium"
                                    checked={formData.activatePremium}
                                    onChange={handleInputChange}
                                    style={{ width: 'auto' }}
                                />
                                <label htmlFor="activatePremium" style={{ margin: 0, fontWeight: 'normal' }}>
                                    <strong>Activate Premium Immediately</strong> (Skip Trial)
                                </label>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="btn-primary">{modalMode === 'add' ? 'Create & Onboard' : 'Save Changes'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCompanyManagement;