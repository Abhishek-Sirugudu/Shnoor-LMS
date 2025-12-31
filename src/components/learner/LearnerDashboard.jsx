import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaClock, FaBookReader, FaStar, FaPlay, FaTrophy } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerDashboard = () => {
  const navigate = useNavigate();
  const [courses] = useState([
    { id: 1, title: 'Intro to Python', progress: 75, totalLessons: 12, completedLessons: 9 },
    { id: 2, title: 'React Fundamentals', progress: 30, totalLessons: 20, completedLessons: 6 },
    { id: 3, title: 'Advanced CSS', progress: 0, totalLessons: 15, completedLessons: 0 },
    { id: 4, title: 'Data Structures', progress: 10, totalLessons: 25, completedLessons: 2 },
  ]);

  const stats = {
    xp: 2450,
    testsTaken: 8,
    hoursWatched: 14.5
  };

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card" style={{ borderLeftColor: '#ca8a04' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">XP Earned</span>
              <div className="stat-number">{stats.xp}</div>
            </div>
            <div style={{ background: '#fef9c3', padding: '10px', borderRadius: '50%', color: '#ca8a04' }}>
              <FaStar size={20} />
            </div>
          </div>
        </div>

        <div className="stat-card" style={{ borderLeftColor: '#003366' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Tests Taken</span>
              <div className="stat-number">{stats.testsTaken}</div>
            </div>
            <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '50%', color: '#003366' }}>
              <FaBookReader size={20} />
            </div>
          </div>
        </div>

        <div className="stat-card" style={{ borderLeftColor: '#166534' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Hours Watched</span>
              <div className="stat-number">{stats.hoursWatched}</div>
            </div>
            <div style={{ background: '#dcfce7', padding: '10px', borderRadius: '50%', color: '#166534' }}>
              <FaClock size={20} />
            </div>
          </div>
        </div>
      </div>

      <h3 style={{ margin: '30px 0 20px 0', color: '#1f2937' }}>My Courses</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {courses.map(course => (
          <div key={course.id} style={{
            background: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ height: '140px', background: 'linear-gradient(135deg, #003366 0%, #3b82f6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaBookReader style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)' }} />
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#1f2937' }}>{course.title}</h4>

              <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px', color: '#6b7280' }}>
                  <span>{course.progress}% Complete</span>
                  <span>{course.completedLessons}/{course.totalLessons} Lessons</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', background: '#166534', transition: 'width 0.5s ease' }}></div>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <button
                  onClick={() => navigate('/learner/video-player')}
                  className="btn-primary"
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <FaPlay size={12} /> {course.progress > 0 ? 'Resume Course' : 'Start Learning'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LearnerDashboard;