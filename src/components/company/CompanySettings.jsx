import React, { useState } from 'react';
import { FaBuilding, FaCreditCard, FaFileInvoice, FaPalette, FaCloudUploadAlt, FaSave } from 'react-icons/fa';
import '../Dashboard.css';

const CompanySettings = () => {
    const [themeColor, setThemeColor] = useState('#003366');
    const [logo, setLogo] = useState(null);

    return (
        <div>

            <div className="table-header">
                <h3>Settings & Billing</h3>
                <button className="btn-primary">
                    <FaSave style={{ marginRight: '5px' }} /> Save Changes
                </button>
            </div>

            <div className="grid-2">



                <div className="form-box">
                    <h4 className="form-header"><FaCreditCard /> Subscription Plan</h4>

                    <div className="stat-card blue" style={{ marginBottom: '20px', borderLeft: '4px solid #3b82f6' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0' }}>Free Trial</h4>
                                <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>Expires in 4 days</p>
                            </div>
                            <span className="status-badge active" style={{ height: 'fit-content' }}>Active</span>
                        </div>
                    </div>

                    <div style={{ background: '#f9fafb', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
                        <h5 style={{ margin: '0 0 10px 0', fontSize: '0.95rem' }}>Upgrade to Premium</h5>
                        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '15px' }}>
                            Unlock unlimited students, courses, and remove trial limits.
                        </p>
                        <button className="btn-primary" style={{ width: '100%' }}>Upgrade Now ($49/mo)</button>
                    </div>

                    <h4 className="form-header" style={{ marginTop: '20px', fontSize: '1rem' }}><FaFileInvoice /> Billing History</h4>
                    <div style={{ fontSize: '0.9rem', color: '#6b7280', padding: '10px', textAlign: 'center', background: '#f3f4f6', borderRadius: '4px' }}>
                        No invoices available yet.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompanySettings;
