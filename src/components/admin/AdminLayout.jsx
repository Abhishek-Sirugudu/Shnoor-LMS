import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FaUserCircle, FaBuilding, FaThLarge, FaSignOutAlt, FaUsers, FaCog, FaPlusCircle } from 'react-icons/fa';
import '../Dashboard.css';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [adminName, setAdminName] = useState('Admin');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/');
      else {
        const name = user.displayName || user.email.split('@')[0];
        setAdminName(name.charAt(0).toUpperCase() + name.slice(1));
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">SHNOOR ADMIN</h3>
        </div>

        <div className="sidebar-section-header">
          MAIN MENU
        </div>

        <ul className="nav-links">
          <li
            className={`nav-item ${location.pathname.includes('dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/admin/dashboard')}
          >
            <FaThLarge className="nav-icon" /> Dashboard
          </li>
          <li
            className={`nav-item ${location.pathname.includes('add-company') ? 'active' : ''}`}
            onClick={() => navigate('/admin/add-company')}
          >
            <FaPlusCircle className="nav-icon" /> Register Company
          </li>
        </ul>

        <div className="sidebar-section-header">
          MANAGEMENT
        </div>

        <ul className="nav-links">
          <li
            className={`nav-item ${location.pathname.includes('company-management') ? 'active' : ''}`}
            onClick={() => navigate('/admin/company-management')}
          >
            <FaBuilding className="nav-icon" /> Company List
          </li>
          <li
            className={`nav-item ${location.pathname.includes('user-management') ? 'active' : ''}`}
            onClick={() => navigate('/admin/user-management')}
          >
            <FaUsers className="nav-icon" /> User Management
          </li>
          <li
            className={`nav-item ${location.pathname.includes('profile-management') ? 'active' : ''}`}
            onClick={() => navigate('/admin/profile-management')}
          >
            <FaCog className="nav-icon" /> Profile Settings
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Admin Console</h2>
          </div>

          <div className="user-profile-section">
            <div className="user-info">
              <span className="user-name">{adminName}</span>
              <span className="user-role">Super Admin</span>
            </div>
            <FaUserCircle className="user-avatar" />
            <button onClick={handleLogout} className="logout-btn" title="Logout">
              <FaSignOutAlt />
            </button>
          </div>
        </div>

        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;