import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { FaPlayCircle, FaCheckCircle, FaArrowLeft, FaStickyNote, FaCommentAlt, FaDownload, FaPaperPlane, FaClock, FaBookmark, FaStar } from 'react-icons/fa';
import '../Dashboard.css';

const VideoPlayer = () => {
    const { setXp } = useOutletContext();
    const [currentVideo, setCurrentVideo] = useState({
        id: 1,
        title: "Introduction to React Hooks",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        completed: false
    });

    const [isBookmarked, setIsBookmarked] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setXp(prev => prev + 10);
            console.log("XP Incremented! +10 XP for watching.");
        }, 60000);

        return () => clearInterval(interval);
    }, [setXp]);

    const [playlist, setPlaylist] = useState([
        { id: 1, title: "Introduction to React Hooks", completed: false, duration: "10:05" },
        { id: 2, title: "useState and useEffect", completed: true, duration: "15:30" },
        { id: 3, title: "Custom Hooks", completed: false, duration: "12:45" },
        { id: 4, title: "Context API", completed: false, duration: "20:10" },
    ]);

    const [activeTab, setActiveTab] = useState('Overview');
    const [notes, setNotes] = useState([]);
    const [noteInput, setNoteInput] = useState('');
    const [doubtInput, setDoubtInput] = useState('');
    const [doubts, setDoubts] = useState([
        { id: 1, user: "John Doe", text: "Can we use multiple useEffects?", time: "2 hours ago" }
    ]);

    const markComplete = () => {
        setCurrentVideo({ ...currentVideo, completed: true });

    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked);

    };

    const handleAddNote = () => {
        if (!noteInput.trim()) return;
        const timestamp = "04:20";
        const newNote = { id: Date.now(), text: noteInput, time: timestamp };
        setNotes([newNote, ...notes]);
        setNoteInput('');
    };

    const handlePostDoubt = () => {
        if (!doubtInput.trim()) return;
        const newDoubt = { id: Date.now(), user: "You", text: doubtInput, time: "Just now" };
        setDoubts([newDoubt, ...doubts]);
        setDoubtInput('');
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '20px', height: 'calc(100vh - 100px)' }}>

            {/* LEFT MAIN - VIDEO PLAYER & TABS */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
                <div style={{
                    background: '#000', borderRadius: '8px', overflow: 'hidden', minHeight: '400px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}>
                    <iframe
                        width="100%"
                        height="400"
                        src={currentVideo.url}
                        title="Video Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#1f2937' }}>{currentVideo.title}</h2>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={handleBookmark}
                                className="btn-secondary"
                                title={isBookmarked ? "Remove Bookmark" : "Bookmark Lesson"}
                                style={{ padding: '8px 12px' }}
                            >
                                <FaBookmark color={isBookmarked ? '#fbbf24' : 'currentColor'} />
                            </button>

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

                    {/* TABS HEADER */}
                    <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #e5e7eb', marginBottom: '20px' }}>
                        {['Overview', 'Q&A', 'Notes', 'Resources'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '10px 5px',
                                    background: 'none',
                                    border: 'none',
                                    borderBottom: activeTab === tab ? '2px solid #003366' : '2px solid transparent',
                                    fontWeight: activeTab === tab ? 'bold' : 'normal',
                                    color: activeTab === tab ? '#003366' : '#6b7280',
                                    cursor: 'pointer'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* TAB CONTENT */}
                    <div style={{ paddingBottom: '30px' }}>
                        {activeTab === 'Overview' && (
                            <div>
                                <h4 style={{ margin: '0 0 10px 0' }}>About this Lesson</h4>
                                <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
                                    In this video, we dive deep into the concept of React Hooks. We explore why they were introduced,
                                    how they solve the problems of class components, and when to use them.
                                </p>

                                <div style={{ marginTop: '30px', borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
                                    <h4 style={{ marginBottom: '10px' }}>Rate this Lesson</h4>
                                    <div style={{ display: 'flex', gap: '5px', color: '#d1d5db', fontSize: '1.5rem', cursor: 'pointer' }}>
                                        {[1, 2, 3, 4, 5].map(s => <FaStar key={s} className="hover-star" />)}
                                    </div>
                                    <textarea
                                        placeholder="Share your feedback (optional)..."
                                        style={{ width: '100%', marginTop: '10px', padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db' }}
                                        rows="2"
                                    ></textarea>
                                    <button className="btn-secondary" style={{ marginTop: '10px', fontSize: '0.8rem' }}>Submit Feedback</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Q&A' && (
                            <div>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Ask a question..."
                                        value={doubtInput}
                                        onChange={(e) => setDoubtInput(e.target.value)}
                                        style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
                                    />
                                    <button onClick={handlePostDoubt} className="btn-primary" style={{ padding: '10px 15px' }}><FaPaperPlane /></button>
                                </div>
                                <div>
                                    {doubts.map(d => (
                                        <div key={d.id} style={{ padding: '15px', background: '#f9fafb', borderRadius: '8px', marginBottom: '10px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <strong>{d.user}</strong>
                                                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{d.time}</span>
                                            </div>
                                            <p style={{ margin: 0, color: '#374151' }}>{d.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Notes' && (
                            <div>
                                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                                    <input
                                        type="text"
                                        placeholder="Add a note at 04:20..."
                                        value={noteInput}
                                        onChange={(e) => setNoteInput(e.target.value)}
                                        style={{ flex: 1, padding: '10px', borderRadius: '6px', border: '1px solid #d1d5db' }}
                                    />
                                    <button onClick={handleAddNote} className="btn-primary" style={{ padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <FaStickyNote /> Save Note
                                    </button>
                                </div>
                                <div>
                                    {notes.length === 0 && <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>No notes taken for this lesson yet.</p>}
                                    {notes.map(n => (
                                        <div key={n.id} style={{ padding: '15px', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>{n.text}</span>
                                            <span style={{ background: '#f59e0b', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>
                                                {n.time}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'Resources' && (
                            <div>
                                <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FaDownload color="#003366" /> Source Code.zip
                                    </span>
                                    <button className="btn-secondary" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Download</button>
                                </div>
                                <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FaDownload color="#003366" /> Lecture Slides.pdf
                                    </span>
                                    <button className="btn-secondary" style={{ padding: '5px 10px', fontSize: '0.8rem' }}>Download</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR - PLAYLIST (CURRICULUM) */}
            <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
                <div style={{ padding: '15px', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <h4 style={{ margin: 0, color: '#1f2937' }}>Course Content</h4>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>4 Lessons • 58 Mins</span>
                </div>

                <div style={{ overflowY: 'auto' }}>
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
                            <h5 style={{ margin: 0, fontSize: '0.95rem', color: currentVideo.id === video.id ? '#003366' : '#374151', lineHeight: '1.4' }}>
                                {video.title}
                            </h5>
                            <span style={{ fontSize: '0.75rem', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                                <FaClock size={10} /> {video.duration}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
