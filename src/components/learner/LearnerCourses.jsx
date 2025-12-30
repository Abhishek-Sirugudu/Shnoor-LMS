import React from 'react';
import { FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerCourses = () => {
  const courses = [
    { id: 1, title: 'Intro to Biology', duration: 12, progress: 100 },
    { id: 2, title: 'Algebra Basics', duration: 25, progress: 70 },
    { id: 3, title: 'World History', duration: 40, progress: 40 },
    { id: 4, title: 'Physics I', duration: 55, progress: 0 },
  ];

  return (
    <div>
      <div className="table-header" style={{ marginBottom: '20px', borderBottom: 'none', paddingLeft: 0 }}>
        <h3>My Enrolled Courses</h3>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {courses.map(c => (
          <div key={c.id} className="stat-card" style={{ padding: '20px', borderLeft: `5px solid ${c.progress === 100 ? '#166534' : '#003366'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>{c.title}</h4>
              {c.progress === 100 ? <FaCheckCircle color="#166534" /> : null}
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '0 0 15px 0' }}>{c.duration} Minutes Content</p>

            {/* Progress Bar */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
                <span>Progress</span>
                <span>{c.progress}%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${c.progress}%`, height: '100%', background: c.progress === 100 ? '#166534' : '#003366' }}></div>
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <FaPlayCircle /> {c.progress > 0 ? "Continue" : "Start Learning"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnerCourses;