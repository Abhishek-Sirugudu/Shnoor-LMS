import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaUsers, FaBuilding, FaMoneyBillWave, FaCheckCircle, FaArrowUp } from 'react-icons/fa';
import '../Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalUsers: 1250,
    totalCompanies: 45,
    totalRevenue: "$12,500",
    activeSubscriptions: 42
  };

  const [companies, setCompanies] = useState([
    { id: 1, name: "Springfield High", email: "admin@springfield.edu", status: "Active" },
    { id: 2, name: "City College", email: "contact@citycollege.com", status: "Pending" },
    { id: 3, name: "Tech Institute", email: "info@techinst.com", status: "Active" },
    { id: 4, name: "Global Learning", email: "admin@global.edu", status: "Suspended" },
    { id: 5, name: "Future Academy", email: "contact@future.ac", status: "Active" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this company? This action cannot be undone.")) {
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
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>

        <div className="stat-card blue">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Total Users</span>
              <div className="stat-number">{stats.totalUsers.toLocaleString()}</div>
            </div>
            <div className="icon-circle blue">
              <FaUsers size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#166534', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FaArrowUp /> +12% this month
          </div>
        </div>

        <div className="stat-card indigo">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Total Companies</span>
              <div className="stat-number">{stats.totalCompanies}</div>
            </div>
            <div className="icon-circle indigo">
              <FaBuilding size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#166534', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FaArrowUp /> +3 new this week
          </div>
        </div>

        <div className="stat-card green">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Total Revenue</span>
              <div className="stat-number">{stats.totalRevenue}</div>
            </div>
            <div className="icon-circle green">
              <FaMoneyBillWave size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#6b7280' }}>
            Based on active plans
          </div>
        </div>

        <div className="stat-card yellow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Active Subs</span>
              <div className="stat-number">{stats.activeSubscriptions}</div>
            </div>
            <div className="icon-circle yellow">
              <FaCheckCircle size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#ca8a04' }}>
            3 Pending Renewal
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="stat-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#003366' }}>Revenue Growth (6 Months)</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 10px' }}>
            {[40, 55, 45, 70, 65, 85].map((h, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '10%' }}>
                <div style={{
                  width: '100%',
                  height: `${h}%`,
                  background: `linear-gradient(to top, #003366, #3b82f6)`,
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 0.5s ease'
                }}></div>
                <span style={{ fontSize: '0.75rem', marginTop: '5px', color: '#6b7280' }}>
                  {['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="stat-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#003366' }}>User Acquisition Trend</h3>
          <div style={{ height: '200px', position: 'relative', borderLeft: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,90 Q20,80 40,60 T100,20" fill="none" stroke="#166534" strokeWidth="2" />
              <circle cx="0" cy="90" r="2" fill="#166534" />
              <circle cx="40" cy="60" r="2" fill="#166534" />
              <circle cx="100" cy="20" r="2" fill="#166534" />
            </svg>
            <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#dcfce7', color: '#166534', padding: '4px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold' }}>
              +54% Growth
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Recent Company Registrations</h3>
          <button className="btn-secondary" onClick={() => navigate('/admin/company-management')}>
            View All Companies
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.slice(0, 5).map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: '500' }}>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <span className={getStatusClass(c.status)}>
                    {c.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button onClick={() => handleDelete(c.id)} className="btn-icon delete" title="Remove">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;