import React, { useState } from 'react';
import { FaTrash, FaExclamationTriangle } from 'react-icons/fa';
import '../Dashboard.css';

const DeleteContent = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Intro Video', type: 'Video' },
    { id: 2, title: 'Chapter 1 Notes', type: 'Document' },
    { id: 3, title: 'Quiz 1', type: 'Quiz' },
  ]);

  const del = (id) => {
    if (window.confirm('Are you sure you want to permanently delete this content?')) {
      setItems(items.filter(i => i.id !== id));
    }
  };

  return (
    <div>
      <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '15px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaExclamationTriangle color="#d97706" />
        <p style={{ margin: 0, color: '#92400e', fontSize: '0.9rem' }}>Deleting content will remove it from all enrolled students' dashboards immediately.</p>
      </div>

      <div className="table-container">
        <div className="table-header"><h3>Manage Content Removal</h3></div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id}>
                <td style={{ fontWeight: '600' }}>{i.title}</td>
                <td>{i.type}</td>
                <td style={{ textAlign: 'right' }}>
                  <button className="btn-icon delete" onClick={() => del(i.id)} title="Delete Permanently">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>No content found.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteContent;