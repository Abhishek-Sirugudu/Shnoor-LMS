import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaFileUpload, FaUsers, FaSearch, FaTrash, FaKey, FaEye } from 'react-icons/fa';
import '../Dashboard.css';

const StudentManagement = () => {
    const navigate = useNavigate();
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const [students, setStudents] = useState([
        { id: 1, name: "Alice Johnson", email: "alice@test.com", course: "Intro to Python", progress: 75, lastLogin: "2 hours ago", status: "Active" },
        { id: 2, name: "Bob Smith", email: "bob@test.com", course: "React Fundamentals", progress: 30, lastLogin: "1 day ago", status: "Active" },
        { id: 3, name: "Charlie Brown", email: "charlie@test.com", course: "Advanced CSS", progress: 90, lastLogin: "5 mins ago", status: "Active" },
        { id: 4, name: "Diana Prince", email: "diana@test.com", course: "Intro to Python", progress: 10, lastLogin: "Never", status: "Inactive" },
    ]);

    const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });

    const handleAddStudent = (e) => {
        e.preventDefault();
        const student = {
            id: Date.now(),
            name: newStudent.name,
            email: newStudent.email,
            course: newStudent.course,
            progress: 0,
            lastLogin: "Never",
            status: "Active"
        };
        setStudents([...students, student]);
        setShowAddModal(false);
        setNewStudent({ name: '', email: '', course: '' });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            setStudents(students.filter(s => s.id !== id));
        }
    };

    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            <div className="table-header">
                <h3 style={{ margin: 0 }}>Student Management</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaUsers /> Batch Management
                    </button>
                    <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaFileUpload /> Bulk Import
                    </button>
                    <button className="btn-primary" onClick={() => setShowAddModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <FaPlus /> Add New Student
                    </button>
                </div>
            </div>


            <div style={{ margin: '20px 0', display: 'flex', gap: '15px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <FaSearch style={{ position: 'absolute', left: '15px', top: '12px', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                    />
                </div>
            </div>


            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Enrolled Course</th>
                            <th>Progress</th>
                            <th>Last Login</th>
                            <th style={{ textAlign: 'right' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(s => (
                            <tr key={s.id}>
                                <td style={{ fontWeight: '600', color: '#1f2937' }}>{s.name}</td>
                                <td style={{ color: '#6b7280' }}>{s.email}</td>
                                <td><span className="course-tag">{s.course}</span></td>
                                <td>
                                    <div style={{ width: '100px', height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div style={{ width: `${s.progress}%`, height: '100%', background: s.progress > 50 ? '#10b981' : '#f59e0b' }}></div>
                                    </div>
                                    <div style={{ fontSize: '0.75rem', marginTop: '3px' }}>{s.progress}%</div>
                                </td>
                                <td style={{ fontSize: '0.9rem' }}>{s.lastLogin}</td>
                                <td style={{ textAlign: 'right' }}>
                                    <button className="btn-icon" title="View Report"><FaEye /></button>
                                    <button className="btn-icon" title="Reset Password"><FaKey /></button>
                                    <button className="btn-icon delete" title="Block/Delete" onClick={() => handleDelete(s.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="modal-header" style={{ marginBottom: '20px' }}>Add New Student</h3>
                        <form onSubmit={handleAddStudent}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" value={newStudent.name} onChange={e => setNewStudent({ ...newStudent, name: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" value={newStudent.email} onChange={e => setNewStudent({ ...newStudent, email: e.target.value })} required />
                            </div>
                            <div className="form-group">
                                <label>Assign Course</label>
                                <select value={newStudent.course} onChange={e => setNewStudent({ ...newStudent, course: e.target.value })} required>
                                    <option value="">Select Course...</option>
                                    <option value="Intro to Python">Intro to Python</option>
                                    <option value="React Fundamentals">React Fundamentals</option>
                                    <option value="Advanced CSS">Advanced CSS</option>
                                </select>
                            </div>
                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>Cancel</button>
                                <button type="submit" className="btn-primary">Add Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default StudentManagement;
