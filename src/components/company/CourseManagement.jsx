import React, { useState } from 'react';
import { FaBook, FaEdit, FaEye } from 'react-icons/fa';
import '../Dashboard.css';

const CourseManagement = () => {
  const [courses] = useState([
    { id: 1, title: 'Intro to Biology', lessons: 8, duration: 120, status: 'Published' },
    { id: 2, title: 'Algebra Basics', lessons: 12, duration: 180, status: 'Draft' },
    { id: 3, title: 'World History', lessons: 6, duration: 100, status: 'Published' },
  ]);

  return (
    <div>
      <div className="table-header">
        <h3>Course Catalog Management</h3>
        <button className="btn-primary">+ Create New Course</button>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Stats</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: 700, color: '#003366' }}>{c.title}</td>
                <td>{c.lessons} Lessons • {c.duration} mins</td>
                <td>
                  <span style={{ 
                    padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', 
                    background: c.status === 'Published' ? '#dcfce7' : '#f3f4f6',
                    color: c.status === 'Published' ? '#166534' : '#4b5563'
                  }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn-icon" title="View"><FaEye /></button>
                  <button className="btn-icon" title="Edit"><FaEdit /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;