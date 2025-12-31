import React, { useState } from 'react';
import { FaPlayCircle, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import '../Dashboard.css';

const VideoPlayer = () => {
    const [currentVideo, setCurrentVideo] = useState({
        id: 1,
        title: "Introduction to React Hooks",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
        completed: false
    });

    const [playlist, setPlaylist] = useState([
        { id: 1, title: "Introduction to React Hooks", completed: false, duration: "10:05" },
        { id: 2, title: "useState and useEffect", completed: true, duration: "15:30" },
        { id: 3, title: "Custom Hooks", completed: false, duration: "12:45" },
        { id: 4, title: "Context API", completed: false, duration: "20:10" },
    ]);

    const markComplete = () => {
        setCurrentVideo({ ...currentVideo, completed: true });
        // Update playlist state logic would go here
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '20px', height: 'calc(100vh - 100px)' }}>
            {/* LEFT SIDEBAR - PLAYLIST */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '15px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <h4 style={{ margin: 0, color: '#1f2937' }}>Course Content</h4>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>4 Lessons • 58 Mins</span>
                </div>

                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {playlist.map((video, index) => (
                        <div
                            key={video.id}
                            onClick={() => setCurrentVideo({ ...currentVideo, title: video.title, id: video.id })}
                            style={{
                                padding: '15px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer',
                                background: currentVideo.id === video.id ? '#eff6ff' : '#fff',
                                borderLeft: currentVideo.id === video.id ? '4px solid #003366' : '4px solid transparent',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Lesson {index + 1}</span>
                                {video.completed && <FaCheckCircle style={{ color: '#166534', fontSize: '0.9rem' }} />}
                            </div>
                            <h5 style={{ margin: 0, fontSize: '0.95rem', color: currentVideo.id === video.id ? '#003366' : '#374151' }}>
                                {video.title}
                            </h5>
                            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{video.duration}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT MAIN - VIDEO PLAYER */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    background: '#000', borderRadius: '8px', overflow: 'hidden', flex: 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}>
                    {/* Iframe Placeholder */}
                    <iframe
                        width="100%"
                        height="100%"
                        src={currentVideo.url}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div style={{ marginTop: '20px', background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ margin: '0 0 5px 0', fontSize: '1.25rem', color: '#1f2937' }}>{currentVideo.title}</h2>
                        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>From course: React Fundamentals</p>
                    </div>

                    <button
                        onClick={markComplete}
                        className={currentVideo.completed ? "btn-secondary" : "btn-primary"}
                        disabled={currentVideo.completed}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        {currentVideo.completed ? <><FaCheckCircle /> Completed</> : "Mark as Complete"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
