import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaTrash, FaEdit, FaPlus, FaList } from 'react-icons/fa';
import '../Dashboard.css';

const CompanyDashboard = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: "Alice", email: "alice@test.com", roll: "101", grade: "A" },
    { id: 2, name: "Bob",   email: "bob@test.com",   roll: "102", grade: "B" },
    { id: 3, name: "Charlie", email: "char@test.com", roll: "103", grade: "A" },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: "Mr. Smith", email: "smith@school.com", subject: "Math", phone: "12345" },
    { id: 2, name: "Ms. Lee",   email: "lee@school.com",   subject: "Science", phone: "67890" },
  ]);

  const handleDeleteStudent = (id) => { if (window.confirm("Delete this student?")) setStudents(students.filter(s => s.id !== id)); };
  const handleDeleteTeacher = (id) => { if (window.confirm("Delete this teacher?")) setTeachers(teachers.filter(t => t.id !== id)); };

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card"><span className="stat-label">Total Students</span><div className="stat-number">{students.length}</div></div>
        <div className="stat-card"><span className="stat-label">Faculty Members</span><div className="stat-number">{teachers.length}</div></div>
        <div className="stat-card"><span className="stat-label">Question Banks</span><div className="stat-number">5</div></div>
      </div>

      <div className="actions-grid">
        <button onClick={() => navigate('/company/add-student')} className="btn-action"><FaPlus /> Add Learner</button>
        <button onClick={() => navigate('/company/add-teacher')} className="btn-action"><FaPlus /> Add Instructor</button>
        <button onClick={() => navigate('/company/question-bank')} className="btn-action"><FaBook /> Question Bank</button>
        <button onClick={() => navigate('/company/course-management')} className="btn-action"><FaList /> Course Management</button>
        <button onClick={() => navigate('/company/add-content')} className="btn-action"><FaPlus /> Add Content</button>
        <button onClick={() => navigate('/company/delete-content')} className="btn-action"><FaTrash /> Delete Content</button>
        <button onClick={() => navigate('/company/test-series')} className="btn-action"><FaList /> Test Series</button>
      </div>

      <div className="table-container">
        <div className="table-header"><h3>Learners</h3></div>
        <table>
          <thead><tr><th>Name</th><th>Roll No</th><th>Grade</th><th style={{textAlign: 'right'}}>Actions</th></tr></thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td><div style={{ fontWeight: '600' }}>{s.name}</div><div style={{ fontSize: '0.8rem', color: '#666' }}>{s.email}</div></td>
                <td>{s.roll}</td><td>{s.grade}</td>
                <td style={{textAlign: 'right'}}>
                  <button onClick={() => handleDeleteStudent(s.id)} className="btn-icon delete"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyDashboard;