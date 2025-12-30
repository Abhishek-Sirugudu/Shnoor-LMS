import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaClipboardList } from 'react-icons/fa';
import '../Dashboard.css';

const TestSeries = () => {
  const [tests] = useState([
    { id: 1, title: 'Midterm Practice Exam', date: '2026-01-15', duration: '60 mins' },
    { id: 2, title: 'Weekly Quiz - Algebra', date: '2026-01-07', duration: '30 mins' },
  ]);

  return (
    <div>
      <div className="table-header">
        <h3>Test Series & Exams</h3>
        <button className="btn-primary">+ Create New Test</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {tests.map(t => (
          <div key={t.id} className="stat-card" style={{ borderLeft: '5px solid #003366' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <FaClipboardList color="#003366" />
              <h4 style={{ margin: 0 }}>{t.title}</h4>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#6b7280', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaCalendarAlt size={12} /> Scheduled: {t.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaClock size={12} /> Duration: {t.duration}</span>
            </div>
            <button className="btn-secondary" style={{ width: '100%', marginTop: '15px' }}>Manage Questions</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeries;