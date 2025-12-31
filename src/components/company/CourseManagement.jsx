import React, { useState } from 'react';
import { FaFolder, FaPlus, FaArrowLeft, FaFileVideo, FaYoutube, FaGoogleDrive, FaTrash, FaCloudUploadAlt, FaLink } from 'react-icons/fa';
import '../Dashboard.css';

const CourseManagement = () => {
  const [view, setView] = useState('folders'); // 'folders' or 'lessons'
  const [currentFolder, setCurrentFolder] = useState(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showFolderModal, setShowFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  // Mock Data
  const [folders, setFolders] = useState([
    { id: 1, name: 'Intro to Python', count: 12 },
    { id: 2, name: 'React Fundamentals', count: 8 },
    { id: 3, name: 'Advanced CSS', count: 5 },
  ]);

  const [lessons, setLessons] = useState([
    { id: 1, title: 'Setup Environment', type: 'video', source: 'upload' },
    { id: 2, title: 'Variables & Data Types', type: 'link', source: 'youtube', url: 'https://youtu.be/...' },
  ]);

  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
    setView('lessons');
  };

  const createFolder = () => {
    if (!newFolderName.trim()) return;
    const newFolder = { id: Date.now(), name: newFolderName, count: 0 };
    setFolders([...folders, newFolder]);
    setNewFolderName('');
    setShowFolderModal(false);
  };

  return (
    <div>
      {/* HEADER */}
      <div className="table-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {view === 'lessons' && (
            <button onClick={() => setView('folders')} className="btn-icon" style={{ fontSize: '1rem', marginLeft: 0 }}>
              <FaArrowLeft />
            </button>
          )}
          <h3>{view === 'folders' ? 'Course Library' : currentFolder?.name}</h3>
        </div>

        {view === 'folders' ? (
          <button className="btn-primary" onClick={() => setShowFolderModal(true)}>
            <FaPlus style={{ marginRight: '5px' }} /> New Course
          </button>
        ) : (
          <button className="btn-primary" onClick={() => setShowLinkModal(true)}>
            <FaLink style={{ marginRight: '5px' }} /> Add Link
          </button>
        )}
      </div>

      {/* FOLDER VIEW */}
      {view === 'folders' && (
        <div className="folder-grid">
          {folders.map(folder => (
            <div
              key={folder.id}
              onClick={() => handleFolderClick(folder)}
              className="folder-card"
            >
              <FaFolder className="folder-icon" />
              <h4 className="folder-name">{folder.name}</h4>
              <span className="folder-count">{folder.count} items</span>
            </div>
          ))}

          {/* Create New Trigger Card */}
          <div
            onClick={() => setShowFolderModal(true)}
            className="create-trigger-card"
          >
            <FaPlus style={{ fontSize: '1.5rem', marginBottom: '10px' }} />
            <span style={{ fontSize: '0.9rem' }}>Create Folder</span>
          </div>
        </div>
      )}

      {/* LESSON VIEW */}
      {view === 'lessons' && (
        <div>
          {/* Drag & Drop Area */}
          <div className="drag-drop-area" style={{ marginBottom: '30px' }}>
            <FaCloudUploadAlt style={{ fontSize: '3rem', color: '#9ca3af', marginBottom: '10px' }} />
            <h4 style={{ margin: '0 0 5px 0', color: '#374151' }}>Drag & Drop Video Files Here</h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#6b7280' }}>or click to browse from your computer</p>
          </div>

          {/* Content List */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Source</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {lessons.map(lesson => (
                  <tr key={lesson.id}>
                    <td style={{ width: '50px' }}>
                      {lesson.source === 'youtube' ? <FaYoutube color="#ef4444" size={20} /> :
                        lesson.source === 'drive' ? <FaGoogleDrive color="#10b981" size={20} /> :
                          <FaFileVideo color="#3b82f6" size={20} />}
                    </td>
                    <td style={{ fontWeight: '500' }}>{lesson.title}</td>
                    <td style={{ textTransform: 'capitalize', fontSize: '0.85rem', color: '#6b7280' }}>
                      {lesson.source === 'youtube' ? 'External Link' : 'Uploaded File'}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn-icon delete"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* FOLDER MODAL */}
      {showFolderModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: '400px' }}>
            <h3 className="modal-header" style={{ marginBottom: '1rem' }}>New Folder</h3>
            <div className="form-group">
              <label>Folder Name</label>
              <input
                autoFocus
                type="text"
                placeholder="e.g. Biology 101"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
              />
            </div>
            <div className="form-actions">
              <button className="btn-secondary" onClick={() => setShowFolderModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={createFolder}>Create</button>
            </div>
          </div>
        </div>
      )}

      {/* LINK MODAL placeholder */}
      {showLinkModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-header" style={{ marginBottom: '1rem' }}>Add External Link</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button className="btn-primary" style={{ flex: 1 }}>YouTube</button>
              <button className="btn-secondary" style={{ flex: 1 }}>Google Drive</button>
            </div>
            <div className="form-group">
              <label>Video Title</label>
              <input type="text" placeholder="Lesson Title" />
            </div>
            <div className="form-group">
              <label>URL</label>
              <input type="text" placeholder="https://..." />
            </div>
            <div className="form-actions">
              <button className="btn-secondary" onClick={() => setShowLinkModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={() => setShowLinkModal(false)}>Add Link</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;