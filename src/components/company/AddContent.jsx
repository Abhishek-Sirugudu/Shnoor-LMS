import React, { useState } from 'react';
import { FaPlus, FaVideo, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';
import '../Dashboard.css';

const AddContent = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Getting Started - Video', type: 'video', duration: 12 },
    { id: 2, title: 'Chapter 1 - Notes', type: 'document', duration: 0 },
  ]);
  const [form, setForm] = useState({ title: '', type: 'video', duration: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    const next = { id: Date.now(), title: form.title || 'Untitled', type: form.type, duration: Number(form.duration) || 0 };
    setItems([next, ...items]);
    setForm({ title: '', type: 'video', duration: '' });
    alert("Content added successfully!");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h3 className="form-header">Add New Course Content</h3>
        <form onSubmit={handleAdd} className="grid-2">
          <div className="full-width form-group">
            <label>Content Title</label>
            <input placeholder="e.g. Introduction to React" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
          </div>
          <div className="form-group">
            <label>Content Type</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
              <option value="video">Video Lesson</option>
              <option value="document">PDF / Document</option>
              <option value="quiz">Interactive Quiz</option>
            </select>
          </div>
          <div className="form-group">
            <label>Duration (Minutes)</label>
            <input type="number" placeholder="e.g. 15" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
          </div>
          <div className="full-width form-actions">
            <button className="btn-primary" type="submit"><FaPlus /> Add to Course</button>
          </div>
        </form>
      </div>

      <div className="table-container" style={{ marginTop: '30px' }}>
        <div className="table-header"><h3>Current Content Preview</h3></div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Title</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr key={i.id}>
                <td>
                  {i.type === 'video' && <FaVideo color="#003366" />}
                  {i.type === 'document' && <FaFileAlt color="#6b7280" />}
                  {i.type === 'quiz' && <FaQuestionCircle color="#ca8a04" />}
                </td>
                <td style={{ fontWeight: '600' }}>{i.title}</td>
                <td>{i.duration > 0 ? `${i.duration} mins` : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddContent;