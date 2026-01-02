import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { FaList, FaTrophy, FaUserCircle, FaSignOutAlt, FaStar, FaChartLine, FaCompass, FaClipboardList } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [studentName, setStudentName] = useState('Learner');
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) navigate('/');
      else {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setStudentName(data.fullName || user.displayName || "Learner");
          setXp(data.xp || 137);
        }
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
          <h3 className="sidebar-title">LEARNING HUB</h3>
        </div>

        <ul className="nav-links">
          <li
            className={`nav-item ${location.pathname.includes('dashboard') ? 'active' : ''}`}
            onClick={() => navigate('/learner/dashboard')}
          >
            <FaChartLine className="nav-icon" /> Overview
          </li>

          <li
            className={`nav-item ${location.pathname.includes('courses') ? 'active' : ''}`}
            onClick={() => navigate('/learner/courses')}
          >
            <FaList className="nav-icon" /> My Learning
          </li>

          <li
            className={`nav-item ${location.pathname.includes('explore') ? 'active' : ''}`}
            onClick={() => navigate('/learner/explore')}
          >
            <FaCompass className="nav-icon" /> Explore Courses
          </li>

          <li
            className={`nav-item ${location.pathname.includes('assignments') ? 'active' : ''}`}
            onClick={() => navigate('/learner/assignments')}
          >
            <FaClipboardList className="nav-icon" /> Assignments
          </li>

          <li
            className={`nav-item ${location.pathname.includes('achievements') ? 'active' : ''}`}
            onClick={() => navigate('/learner/achievements')}
          >
            <FaTrophy className="nav-icon" /> Achievements
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="top-bar">
          <div className="page-title">
            <h2>Student Portal</h2>
          </div>

          <div className="user-profile-section">
            <div style={{
              background: '#fef9c3', color: '#854d0e', padding: '6px 12px', borderRadius: '20px',
              fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px',
              border: '1px solid #fde047', marginRight: '15px'
            }}>
              <FaStar color="#eab308" /> {xp} XP
            </div>

            <div className="user-info">
              <span className="user-name">{studentName}</span>
              <span className="user-role">Learner</span>
            </div>
            <FaUserCircle style={{ fontSize: '2.2rem', color: '#9ca3af' }} />
            <button onClick={handleLogout} className="logout-btn" title="Logout">
              <FaSignOutAlt />
            </button>
          </div>
        </div>

        <div className="content-area">
          <Outlet context={{ studentName, xp, setXp }} />
        </div>
      </div>
    </div>
  );
};

export default LearnerLayout;