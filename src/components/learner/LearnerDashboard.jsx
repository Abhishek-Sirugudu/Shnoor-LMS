import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FaClock, FaBookReader, FaStar, FaPlay, FaFire, FaMedal } from 'react-icons/fa';
import '../Dashboard.css';
import './Learner.css';

const LearnerDashboard = () => {
  const navigate = useNavigate();
  const { studentName, xp } = useOutletContext();


  const [courses] = useState([
    { id: 1, title: 'Intro to Python', progress: 75, totalLessons: 12, completedLessons: 9, lastWatched: true, thumbnailColor: '#3b82f6' },
    { id: 2, title: 'React Fundamentals', progress: 30, totalLessons: 20, completedLessons: 6, lastWatched: false, thumbnailColor: '#10b981' },
    { id: 3, title: 'Advanced CSS', progress: 0, totalLessons: 15, completedLessons: 0, lastWatched: false, thumbnailColor: '#f59e0b' },
    { id: 4, title: 'Data Structures', progress: 10, totalLessons: 25, completedLessons: 2, lastWatched: false, thumbnailColor: '#8b5cf6' },
  ]);

  const stats = {
    xp: xp,
    rank: 12,
    streak: 5
  };

  const resumeCourse = courses.find(c => c.lastWatched) || courses[0];

  return (
    <div>

      <div className="learner-welcome">
        <h2>Welcome back, {studentName}! 👋</h2>
        <p>Ready to send it? Let's continue where you left off.</p>
      </div>


      <div className="resume-card">
        <div className="resume-content">
          <span className="resume-label">Resume Learning</span>
          <h3 className="resume-title">{resumeCourse.title}</h3>
          <p className="resume-info">
            <FaClock style={{ marginRight: '6px' }} />
            Lesson {resumeCourse.completedLessons + 1}: Variables & Data Types
          </p>
          <button
            onClick={() => navigate('/learner/video-player')}
            className="resume-btn"
          >
            <FaPlay /> Continue Watching
          </button>
        </div>
        <div className="resume-icon-bg">
          <FaPlay />
        </div>
      </div>


      <div className="stats-grid">
        <div className="stat-card" style={{ borderLeftColor: '#f59e0b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Total XP</span>
              <div className="stat-number">{stats.xp}</div>
            </div>
            <div style={{ background: '#fef3c7', padding: '12px', borderRadius: '50%', color: '#d97706' }}>
              <FaStar size={24} />
            </div>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#92400e', marginTop: '5px' }}>Top 5% of learners</div>
        </div>

        <div className="stat-card" style={{ borderLeftColor: '#8b5cf6' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Current Rank</span>
              <div className="stat-number">#{stats.rank}</div>
            </div>
            <div style={{ background: '#ede9fe', padding: '12px', borderRadius: '50%', color: '#7c3aed' }}>
              <FaMedal size={24} />
            </div>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#5b21b6', marginTop: '5px' }}> in your batch</div>
        </div>

        <div className="stat-card" style={{ borderLeftColor: '#ef4444' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Daily Streak</span>
              <div className="stat-number">{stats.streak} Days</div>
            </div>
            <div style={{ background: '#fee2e2', padding: '12px', borderRadius: '50%', color: '#dc2626' }}>
              <FaFire size={24} />
            </div>
          </div>
          <div style={{ fontSize: '0.85rem', color: '#991b1b', marginTop: '5px' }}>Keep it up! 🔥</div>
        </div>
      </div>

      <h3 className="section-title">My Courses</h3>
      <div className="course-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card" onClick={() => navigate('/learner/video-player')}>
            <div className="course-thumbnail" style={{ background: course.thumbnailColor }}>
              <FaBookReader style={{ fontSize: '3.5rem', color: 'rgba(255,255,255,0.3)' }} />
            </div>

            <div className="course-details">
              <h4 className="course-title">{course.title}</h4>

              <div style={{ marginBottom: 'auto' }}>
                <div className="course-meta">
                  <span>{course.progress}%</span>
                  <span>{course.completedLessons}/{course.totalLessons}</span>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${course.progress}%`, background: course.thumbnailColor }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LearnerDashboard;