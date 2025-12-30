import React, { useState } from 'react';
import { FaTrash, FaUserShield, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import '../Dashboard.css';

const AdminUserManagement = () => {
  // Mock Data
  const [users, setUsers] = useState([
    { id: 1, name: 'Super Admin', email: 'admin@shnoor.com', role: 'admin' },
    { id: 2, name: 'Principal Skinner', email: 'admin@springfield.edu', role: 'company' },
    { id: 3, name: 'John Student', email: 'john@test.com', role: 'student' },
    { id: 4, name: 'Jane Doe', email: 'jane@test.com', role: 'student' },
  ]);

  const handleDelete = (id) => {
    if(window.confirm("Remove this user?")) {
        setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div>
      <div className="table-header">
         <h3>All Registered Users</h3>
         <button className="btn-primary" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Export Data</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email Address</th>
              <th>System Role</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td style={{ fontWeight: '600', color: '#003366' }}>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  {/* Badge Logic for Roles */}
                  <span style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 'bold',
                    background: u.role === 'admin' ? '#e0e7ff' : (u.role === 'company' ? '#fef9c3' : '#dcfce7'),
                    color: u.role === 'admin' ? '#3730a3' : (u.role === 'company' ? '#854d0e' : '#166534')
                  }}>
                    {u.role === 'admin' && <FaUserShield />}
                    {u.role === 'company' && <FaChalkboardTeacher />}
                    {u.role === 'student' && <FaUserGraduate />}
                    {u.role.toUpperCase()}
                  </span>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn-icon delete" onClick={() => handleDelete(u.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserManagement;