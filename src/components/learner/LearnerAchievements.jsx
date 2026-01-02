import React from 'react';
import { FaTrophy, FaCertificate, FaLock, FaDownload, FaShareAlt } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerAchievements = () => {

    const certificates = [
        {
            id: 1,
            course: 'Introduction to Python',
            date: 'March 10, 2024',
            status: 'Unlocked',
            previewColor: '#003366'
        },
        {
            id: 2,
            course: 'React Fundamentals',
            date: 'N/A',
            status: 'Locked',
            progress: 30,
            previewColor: '#e5e7eb'
        },
        {
            id: 3,
            course: 'Data Structures & Algorithms',
            date: 'N/A',
            status: 'Locked',
            progress: 10,
            previewColor: '#e5e7eb'
        }
    ];

    return (
        <div>
            <div className="learner-page-header">
                <h3>My Achievements</h3>
                <div style={{ background: '#fef3c7', padding: '8px 16px', borderRadius: '20px', color: '#b45309', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaTrophy /> Level 5 Scholar
                </div>
            </div>


            <h4 style={{ margin: '0 0 15px 0', color: '#374151' }}>Course Certificates</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
                {certificates.map(cert => (
                    <div key={cert.id} style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>


                        <div style={{
                            height: '180px',
                            background: cert.previewColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}>
                            {cert.status === 'Locked' ? (
                                <div style={{ textAlign: 'center', color: '#9ca3af' }}>
                                    <FaLock size={40} style={{ marginBottom: '10px' }} />
                                    <div>Complete Course to Unlock</div>
                                    <div style={{ marginTop: '10px', background: 'rgba(0,0,0,0.1)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.8rem' }}>
                                        {cert.progress}% Complete
                                    </div>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', color: 'white' }}>
                                    <FaCertificate size={50} style={{ marginBottom: '10px', color: '#fbbf24' }} />
                                    <div style={{ fontFamily: 'serif', fontSize: '1.2rem', letterSpacing: '1px' }}>CERTIFICATE</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>OF COMPLETION</div>
                                </div>
                            )}
                        </div>


                        <div style={{ padding: '20px' }}>
                            <h4 style={{ margin: '0 0 5px 0', color: '#111827' }}>{cert.course}</h4>
                            <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: '#6b7280' }}>
                                {cert.status === 'Unlocked' ? `Issued on ${cert.date}` : 'Not yet earned'}
                            </p>

                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    className="btn-primary"
                                    disabled={cert.status === 'Locked'}
                                    style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: cert.status === 'Locked' ? 0.6 : 1 }}
                                >
                                    <FaDownload /> Download
                                </button>
                                <button
                                    className="btn-secondary"
                                    disabled={cert.status === 'Locked'}
                                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: cert.status === 'Locked' ? 0.6 : 1 }}
                                >
                                    <FaShareAlt />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnerAchievements;
