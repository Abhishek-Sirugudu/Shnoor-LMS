import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaBuilding, FaMoneyBillWave, FaClock, FaExclamationTriangle, FaChartPie, FaChartBar, FaChartLine } from 'react-icons/fa';
import '../Dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();


  const stats = {
    totalRevenue: "₹ 5,00,000",
    activeCompanies: 15,
    trialUsers: 8,
    trialExpiringSoon: 5
  };

  const [companies, setCompanies] = useState([
    { id: 1, name: "Tech High School", email: "principal@techhigh.com", status: "Premium", joinedDate: "2024-01-15" },
    { id: 2, name: "City College", email: "contact@citycollege.com", status: "Trial", joinedDate: "2024-02-01", trialEndsIn: 4 },
    { id: 3, name: "Global Learning", email: "admin@global.edu", status: "Expired", joinedDate: "2024-01-20" },
    { id: 4, name: "Future Academy", email: "contact@future.ac", status: "Premium", joinedDate: "2024-01-10" },
    { id: 5, name: "Springfield High", email: "admin@springfield.edu", status: "Trial", joinedDate: "2024-02-03", trialEndsIn: 6 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this company? This action cannot be undone.")) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  };

  const getStatusBadge = (company) => {
    if (company.status === 'Premium') {
      return <span className="status-badge active" style={{ backgroundColor: '#FFD700', color: '#854D0E' }}>Premium</span>;
    } else if (company.status === 'Trial') {
      return <span className="status-badge active" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>Trial - {company.trialEndsIn} Days Left</span>;
    } else if (company.status === 'Expired') {
      return <span className="status-badge suspended" style={{ backgroundColor: '#fee2e2', color: '#991b1b' }}>Trial Expired</span>;
    }
    return <span className="status-badge neutral">{company.status}</span>;
  };

  return (
    <div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>

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
        </div>

        <div className="stat-card blue">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Active Companies</span>
              <div className="stat-number">{stats.activeCompanies}</div>
            </div>
            <div className="icon-circle blue">
              <FaBuilding size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#1e40af' }}>
            Premium Plan Users
          </div>
        </div>

        <div className="stat-card yellow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Trial Users</span>
              <div className="stat-number">{stats.trialUsers}</div>
            </div>
            <div className="icon-circle yellow">
              <FaClock size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#ca8a04' }}>
            7-Day Free Trial Active
          </div>
        </div>

        <div className="stat-card red">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Trial Expiring Soon</span>
              <div className="stat-number">{stats.trialExpiringSoon}</div>
            </div>
            <div className="icon-circle red">
              <FaExclamationTriangle size={20} />
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#991b1b' }}>
            Action needed
          </div>
        </div>
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>


        <div className="stat-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#003366', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaChartLine /> Revenue Growth
          </h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 10px' }}>
            {[50, 60, 55, 75, 80, 95].map((h, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '10%' }}>
                <div style={{
                  width: '100%',
                  height: `${h}%`,
                  background: `linear-gradient(to top, #16a34a, #22c55e)`,
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <span style={{ fontSize: '0.75rem', marginTop: '5px', color: '#6b7280' }}>
                  {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>


        <div className="stat-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#003366', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaChartPie /> Conversion Rate
          </h3>
          <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>

            <div style={{
              width: '150px', height: '150px', borderRadius: '50%',
              background: 'conic-gradient(#3b82f6 0% 70%, #fbbf24 70% 100%)'
            }}></div>
            <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', gap: '5px', right: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                <div style={{ width: '10px', height: '10px', background: '#3b82f6' }}></div> Premium (70%)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                <div style={{ width: '10px', height: '10px', background: '#fbbf24' }}></div> Trial (30%)
              </div>
            </div>
          </div>
        </div>


        <div className="stat-card">
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#003366', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaChartBar /> New Signups
          </h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
            {[10, 25, 15, 30, 20, 35, 40].map((h, i) => (
              <div key={i} style={{
                width: '10%', height: `${h * 2}%`, background: '#6366f1', borderRadius: '4px 4px 0 0'
              }}></div>
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#6b7280', marginTop: '10px' }}>Last 7 Days</div>
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
              <th>Owner Email</th>
              <th>Plan Status</th>
              <th>Joined Date</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.slice(0, 5).map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: '500' }}>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  {getStatusBadge(c)}
                </td>
                <td>{c.joinedDate}</td>
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