import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaCrown } from 'react-icons/fa';
import '../Dashboard.css';

const AddCompany = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    companyName: '',
    contactPerson: '',
    adminEmail: '',
    password: '',
    phone: '',
    address: '',
    activatePremium: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating Company:", {
      ...data,
      plan: data.activatePremium ? 'Premium' : 'Free Trial (7 Days)'
    });
    alert(`Company Registered Successfully! Plan: ${data.activatePremium ? 'Premium Only' : '7-Day Free Trial'}`);
    navigate('/admin/dashboard');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h3 className="form-header">Register New Company</h3>

        <form onSubmit={handleSubmit} className="grid-2">

          <div className="full-width form-group">
            <label><FaBuilding style={{ marginRight: '8px', color: '#6b7280' }} />Company / Institute Name</label>
            <input
              type="text" name="companyName" placeholder="e.g. Springfield High School"
              value={data.companyName} onChange={handleChange} required
            />
          </div>

          <div className="form-group">
            <label><FaUser style={{ marginRight: '8px', color: '#6b7280' }} />Contact Person Name</label>
            <input
              type="text" name="contactPerson" placeholder="e.g. Dr. John Smith"
              value={data.contactPerson} onChange={handleChange} required
            />
          </div>

          <div className="form-group">
            <label><FaEnvelope style={{ marginRight: '8px', color: '#6b7280' }} />Admin Email</label>
            <input
              type="email" name="adminEmail" placeholder="admin@school.com"
              value={data.adminEmail} onChange={handleChange} required
            />
          </div>

          <div className="form-group">
            <label><FaLock style={{ marginRight: '8px', color: '#6b7280' }} />Password</label>
            <input
              type="password" name="password" placeholder="Initial Password"
              value={data.password} onChange={handleChange} required
            />
          </div>

          <div className="form-group">
            <label><FaPhone style={{ marginRight: '8px', color: '#6b7280' }} />Phone Contact</label>
            <input
              type="tel" name="phone" placeholder="+91 98765 43210"
              value={data.phone} onChange={handleChange} required
            />
          </div>

          <div className="full-width form-group">
            <label><FaMapMarkerAlt style={{ marginRight: '8px', color: '#6b7280' }} />Full Address</label>
            <input
              type="text" name="address" placeholder="Street, City, Zip Code"
              value={data.address} onChange={handleChange} required
            />
          </div>

          <div className="full-width form-group" style={{
            marginTop: '10px',
            padding: '15px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: data.activatePremium ? '#fffbeb' : '#f0fdf4'
          }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '10px', fontSize: '1rem', color: '#111827' }}>
              <input
                type="checkbox"
                name="activatePremium"
                checked={data.activatePremium}
                onChange={handleChange}
                style={{ width: '20px', height: '20px' }}
              />
              Activate <strong>Premium Plan</strong> Immediately?
            </label>
            <p style={{ marginLeft: '30px', marginTop: '5px', fontSize: '0.85rem', color: '#6b7280' }}>
              {data.activatePremium
                ? <span style={{ color: '#b45309', display: 'flex', alignItems: 'center', gap: '5px' }}><FaCrown /> Client will be billed ₹999/month immediately. Unlimited Access.</span>
                : <span style={{ color: '#15803d', display: 'flex', alignItems: 'center', gap: '5px' }}><FaCheckCircle /> Default: 7-Day Free Trial will be started.</span>
              }
            </p>
          </div>

          <div className="full-width form-actions">
            <button type="submit" className="btn-primary">Register Company</button>
            <button type="button" onClick={() => navigate('/admin/dashboard')} className="btn-secondary">Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddCompany;