import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheckCircle } from 'react-icons/fa';
import '../Dashboard.css';

const AdminCompanyManagement = () => {
  const [companies, setCompanies] = useState([
    { id: 1, name: 'Green Valley School', email: 'contact@greenvalley.edu', status: 'Active', plan: 'Premium' },
    { id: 2, name: 'Metro College', email: 'info@metrocollege.com', status: 'Pending', plan: 'Basic' },
    { id: 3, name: 'Tech Academy', email: 'hello@techacademy.com', status: 'Active', plan: 'Enterprise' },
  ]);

  const remove = (id) => setCompanies(companies.filter(c => c.id !== id));

  return (
    <div>
       <div className="table-header">
         <h3>Company Management</h3>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Institute Name</th>
              <th>Contact Email</th>
              <th>Plan</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(c => (
              <tr key={c.id}>
                <td style={{ fontWeight: 600, color: '#003366' }}>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.plan}</td>
                <td>
                   <span style={{
                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold',
                    background: c.status === 'Active' ? '#dcfce7' : '#fef9c3',
                    color: c.status === 'Active' ? '#166534' : '#854d0e'
                  }}>
                    {c.status}
                  </span>
                </td>
                <td style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                  <button className="btn-icon" title="Edit Details"><FaEdit /></button>
                  <button className="btn-icon delete" onClick={() => remove(c.id)} title="Remove"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCompanyManagement;