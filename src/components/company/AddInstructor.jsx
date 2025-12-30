import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Dashboard.css';

const AddInstructor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    fullName: '', 
    email: '', 
    phone: '', 
    subject: '' 
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Instructor Data:", formData);
    
    alert("Instructor Added Successfully!");
    navigate('/company/overview');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h3 className="form-header">Add New Instructor</h3>
        
        <p style={{ marginBottom: '20px', color: '#6b7280', fontSize: '0.9rem' }}>
          Register a new faculty member to manage courses and test series.
        </p>

        <form onSubmit={handleSubmit} className="grid-2">
          
          <div className="full-width form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="e.g. Dr. Robert Wilson" 
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
              placeholder="instructor@school.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="+91 XXXXX XXXXX" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Subject Specialization</label>
            <input 
              type="text" 
              name="subject" 
              placeholder="e.g. Computer Science" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="full-width form-actions">
            <button type="submit" className="btn-primary">Register Instructor</button>
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

export default AddInstructor;