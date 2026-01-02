
import React, { useState } from 'react';
import { FaClipboardList, FaFileUpload, FaCheckCircle, FaClock, FaPenAlt } from 'react-icons/fa';
import '../Dashboard.css';
import './Learner.css';

const LearnerAssignments = () => {
    const [activeTab, setActiveTab] = useState('Quizzes');


    const quizzes = [
        { id: 1, title: 'Python Basics Quiz', course: 'Intro to Python', dueDate: '2024-03-25', status: 'Pending', duration: '30 Mins' },
        { id: 2, title: 'React Hooks Assessment', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'Completed', score: '85%' },
    ];

    const assignments = [
        { id: 1, title: 'Build a Portfolio Website', course: 'Web Development Bootcamp', dueDate: '2024-04-01', status: 'Pending' },
        { id: 2, title: 'Designing a Mobile App UI', course: 'UI/UX Masterclass', dueDate: '2024-03-15', status: 'Submitted' },
    ];

    const [showAnalysis, setShowAnalysis] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);

    const handleViewAnalysis = (quiz) => {
        setSelectedQuiz(quiz);
        setShowAnalysis(true);
    };

    return (
        <div>
            <div className="assignment-header">
                <h3>My Assignments & Quizzes</h3>
                <div className="tab-group">
                    <button
                        className={activeTab === 'Quizzes' ? 'btn-primary' : 'btn-secondary'}
                        onClick={() => setActiveTab('Quizzes')}
                    >
                        Online Quizzes
                    </button>
                    <button
                        className={activeTab === 'Assignments' ? 'btn-primary' : 'btn-secondary'}
                        onClick={() => setActiveTab('Assignments')}
                    >
                        Offline Assignments
                    </button>
                </div>
            </div>

            <div>
                {activeTab === 'Quizzes' && (
                    <div className="assignment-grid">
                        {quizzes.map(q => (
                            <div key={q.id} className="assignment-card" style={{ borderLeftColor: q.status === 'Completed' ? '#10b981' : '#f59e0b' }}>
                                <div className="assignment-meta">
                                    <span className="course-tag">{q.course}</span>
                                    {q.status === 'Completed' ? <FaCheckCircle color="#10b981" /> : <FaClock color="#f59e0b" />}
                                </div>
                                <h4 className="assignment-title">{q.title}</h4>
                                <p className="assignment-info">Due: {q.dueDate} • Duration: {q.duration || 'N/A'}</p>

                                {q.status === 'Completed' ? (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                                        <div className="score-badge">Score: {q.score}</div>
                                        <button className="btn-secondary" style={{ padding: '5px 10px', fontSize: '0.8rem' }} onClick={() => handleViewAnalysis(q)}>
                                            View Analysis
                                        </button>
                                    </div>
                                ) : (
                                    <button className="assignment-btn">
                                        <FaPenAlt /> Start Quiz
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'Assignments' && (
                    <div className="assignment-grid">
                        {assignments.map(a => (
                            <div key={a.id} className="assignment-card" style={{ borderLeftColor: a.status === 'Submitted' ? '#3b82f6' : '#ef4444' }}>
                                <div className="assignment-meta">
                                    <span className="course-tag">{a.course}</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: a.status === 'Submitted' ? '#3b82f6' : '#ef4444' }}>{a.status}</span>
                                </div>
                                <h4 className="assignment-title">{a.title}</h4>
                                <p className="assignment-info">Due: {a.dueDate}</p>

                                {a.status === 'Submitted' ? (
                                    <div className="submitted-badge">
                                        Submitted for Review
                                    </div>
                                ) : (
                                    <div className="drag-drop-zone">
                                        <div className="drag-drop-content">
                                            <FaFileUpload />
                                            <p style={{ margin: 0, fontSize: '0.9rem' }}>Drag file here or click to upload</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>


            {showAnalysis && selectedQuiz && (
                <div className="modal-overlay">
                    <div className="modal-content" style={{ maxWidth: '600px' }}>
                        <div className="modal-header">
                            <h3>Results: {selectedQuiz.title}</h3>
                            <button className="modal-close-btn" onClick={() => setShowAnalysis(false)}>&times;</button>
                        </div>
                        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <div style={{ textAlign: 'center', marginBottom: '20px', padding: '15px', background: '#f0f9ff', borderRadius: '8px' }}>
                                <h2 style={{ color: '#003366', margin: 0 }}>{selectedQuiz.score}</h2>
                                <p style={{ margin: 0, color: '#6b7280' }}>Great job! You passed.</p>
                            </div>


                            {[1, 2, 3].map((i) => (
                                <div key={i} style={{ marginBottom: '15px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                                    <p style={{ fontWeight: 600, marginBottom: '5px' }}>Q{i}. What is the return type of useState?</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.9rem' }}>
                                        <div style={{ padding: '8px', background: '#dcfce7', borderRadius: '4px', border: '1px solid #166534' }}>
                                            <FaCheckCircle style={{ color: '#166534', marginRight: '5px' }} />
                                            Array (Correct Answer)
                                        </div>
                                        {i === 2 && (
                                            <div style={{ padding: '8px', background: '#fee2e2', borderRadius: '4px', border: '1px solid #b91c1c' }}>
                                                <span style={{ color: '#b91c1c', marginRight: '5px', fontWeight: 'bold' }}>&times;</span>
                                                Object (Your Answer)
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="form-actions">
                            <button className="btn-primary" onClick={() => setShowAnalysis(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LearnerAssignments;
