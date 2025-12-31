import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Dashboard.css';

const AddLearner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    grade: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Learner Data:", formData);

    alert("Learner Added Successfully!");
    navigate('/company/overview');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h3 className="form-header">Add New Learner</h3>

        <p style={{ marginBottom: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
          Enroll a new student into the system to grant them access to courses and points tracking.
        </p>

        <form onSubmit={handleSubmit} className="grid-2">

          <div className="full-width form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="learner@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Enrollment / Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              placeholder="e.g. SN-2025-01"
              value={formData.rollNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Assign Course (Optional)</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select a Course...</option>
              <option value="python">Intro to Python (Folder)</option>
              <option value="react">React Fundamentals (Folder)</option>
              <option value="css">Advanced CSS (Folder)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Assigned Grade / Class</label>
            <input
              type="text"
              name="grade"
              placeholder="e.g. Grade 10-A"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </div>

          <div className="full-width form-actions">
            <button type="submit" className="btn-primary">Save Learner Profile</button>
            <button
              type="button"
              onClick={() => navigate('/company/overview')}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddLearner;