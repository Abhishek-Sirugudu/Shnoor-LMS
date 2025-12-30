import React, { useState } from 'react';
import { FaClock, FaBookReader, FaStar } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerDashboard = () => {
  // Mock Data from Teammate
  const [completed] = useState([
    { id: 1, title: 'Intro to Biology', duration: 12 },
    { id: 2, title: 'Algebra Basics', duration: 25 },
    { id: 3, title: 'World History', duration: 40 },
  ]);

  // Logic: 1 Minute = 1 Point
  const totalMinutes = completed.reduce((s, c) => s + c.duration, 0);
  const points = totalMinutes;

  return (
    <div>
      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card" style={{ borderLeft: '5px solid #003366' }}>
          <span className="stat-label">Courses Completed</span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="stat-number">{completed.length}</span>
            <FaBookReader style={{ fontSize: '1.5rem', opacity: 0.3, color: '#003366' }} />
          </div>
        </div>

        <div className="stat-card" style={{ borderLeft: '5px solid #166534' }}>
          <span className="stat-label">Watch Time (Mins)</span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="stat-number">{totalMinutes}</span>
            <FaClock style={{ fontSize: '1.5rem', opacity: 0.3, color: '#166534' }} />
          </div>
        </div>

        <div className="stat-card" style={{ borderLeft: '5px solid #ca8a04' }}>
          <span className="stat-label">Total XP Points</span>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="stat-number">{points}</span>
            <FaStar style={{ fontSize: '1.5rem', opacity: 0.3, color: '#ca8a04' }} />
          </div>
        </div>
      </div>

      {/* Recent Activity List */}
      <div className="table-container" style={{ marginTop: '30px' }}>
        <div className="table-header">
           <h3>Recently Completed Lessons</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Lesson Title</th>
              <th>Duration</th>
              <th>Points Earned</th>
            </tr>
          </thead>
          <tbody>
            {completed.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: '500', color: '#003366' }}>{c.title}</td>
                <td>{c.duration} Mins</td>
                <td>
                  <span style={{ 
                    background: '#fef9c3', color: '#854d0e', padding: '2px 8px', 
                    borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' 
                  }}>
                    +{c.duration} XP
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnerDashboard;