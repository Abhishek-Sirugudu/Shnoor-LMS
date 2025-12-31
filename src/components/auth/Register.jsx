import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: formData.fullName,
        email: formData.email,
        schoolName: formData.schoolName,
        role: 'company',
        createdAt: new Date().toISOString()
      });

      alert("Registration Successful!");
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') setError("Email is already registered.");
      else setError("Failed to create account: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      {/* Left Side: Brand Section - Using same style as Login for consistency */}
      <div className="auth-brand-section">
        <div className="brand-content">
          <h1 className="brand-logo">Join SHNOOR</h1>
          <p className="brand-description">
            Start your journey with the most advanced education platform.
            Create your school account in minutes.
          </p>
          <div className="brand-testimonial">
            <span className="quote-text">"Setting up our entire school system took less than a day. The efficiency Shnoor brings is unmatched."</span>
            <span className="quote-author">- Mark Thompson, IT Director</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="auth-form-section">
        <div className="login-card" style={{ maxWidth: '500px' }}> {/* Slightly wider for register form */}
          <div className="login-header">
            <h2 className="brand-title">Get Started</h2>
            <p className="brand-subtitle">Create your organization account.</p>
          </div>

          {error && <div className="error-message">⚠️ {error}</div>}

          <form onSubmit={handleRegister} className="login-form">
            <div className="form-group">
              <label>School / Organization Name</label>
              <input type="text" name="schoolName" placeholder="e.g. Springfield High" value={formData.schoolName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@school.edu" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Min 8 chars" value={formData.password} onChange={handleChange} required />
                  <button type="button" className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm</label>
                <div className="password-wrapper">
                  <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm" value={formData.confirmPassword} onChange={handleChange} required />
                  <button type="button" className="password-toggle-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="login-footer">
            <p>Already have an account? <Link to="/" className="link">Sign In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;