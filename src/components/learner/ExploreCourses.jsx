import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearchengin, FaStar, FaUserTie, FaFilter, FaSearch, FaCheckCircle, FaBookOpen, FaCertificate } from 'react-icons/fa';
import '../Dashboard.css';

const ExploreCourses = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing'];


    const allCourses = [
        {
            id: 1, title: 'Introduction to Python Programming', category: 'Data Science',
            instructor: 'Dr. Angela Yu', rating: 4.8, reviews: 1250, price: '₹499',
            thumbnailColor: '#3b82f6', level: 'Beginner', hasCertificate: true
        },
        {
            id: 2, title: 'The Complete Web Developer Boots...', category: 'Web Development',
            instructor: 'Colt Steele', rating: 4.7, reviews: 890, price: '₹699',
            thumbnailColor: '#ef4444', level: 'Intermediate', hasCertificate: true
        },
        {
            id: 3, title: 'UI/UX Design Masterclass', category: 'Design',
            instructor: 'Gary Simon', rating: 4.9, reviews: 450, price: '₹599',
            thumbnailColor: '#10b981', level: 'Beginner', hasCertificate: true
        },
        {
            id: 4, title: 'React.js - The Complete Guide', category: 'Web Development',
            instructor: 'Maximilian S.', rating: 4.8, reviews: 2100, price: '₹799',
            thumbnailColor: '#f59e0b', level: 'Advanced', hasCertificate: true
        },
        {
            id: 5, title: 'Digital Marketing 101', category: 'Marketing',
            instructor: 'Seth Godin', rating: 4.6, reviews: 300, price: 'Free',
            thumbnailColor: '#8b5cf6', level: 'Beginner', hasCertificate: false
        },
        {
            id: 6, title: 'Machine Learning A-Z', category: 'Data Science',
            instructor: 'Kirill Eremenko', rating: 4.7, reviews: 1500, price: '₹899',
            thumbnailColor: '#6366f1', level: 'Advanced', hasCertificate: true
        }
    ];

    const filteredCourses = allCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>

            <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#1f2937' }}>Find your next skill</h2>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
                        <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input
                            type="text"
                            placeholder="Search for Python, React, Design..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '12px 12px 12px 45px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                        />
                    </div>
                </div>


                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '5px' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                background: selectedCategory === cat ? '#1f2937' : 'white',
                                color: selectedCategory === cat ? 'white' : '#4b5563',
                                border: '1px solid',
                                borderColor: selectedCategory === cat ? '#1f2937' : '#e5e7eb',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'all 0.2s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>


            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                {filteredCourses.map(course => (
                    <div
                        key={course.id}
                        className="course-card"
                        onClick={() => navigate(`/learner/course/${course.id}`)}
                        style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                    >

                        <div style={{ height: '160px', background: course.thumbnailColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaBookOpen style={{ fontSize: '3.5rem', color: 'rgba(255,255,255,0.2)' }} />
                        </div>

                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px' }}>{course.category}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: '#f59e0b', fontWeight: 'bold' }}>
                                    <FaStar /> {course.rating}
                                </span>
                            </div>

                            <h3 style={{ fontSize: '1.1rem', color: '#111827', margin: '0 0 10px 0', lineHeight: '1.4', height: '44px', overflow: 'hidden' }}>{course.title}</h3>

                            <p style={{ fontSize: '0.9rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                                <FaUserTie /> {course.instructor}
                            </p>

                            {course.hasCertificate && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#d97706', marginBottom: '15px', fontWeight: 'bold' }}>
                                    <FaCertificate /> Certificate Included
                                </div>
                            )}

                            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#1f2937' }}>{course.price}</span>
                                <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '500' }}>View Details</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredCourses.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
                    <FaSearchengin size={40} style={{ marginBottom: '10px', opacity: 0.5 }} />
                    <p>No courses found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default ExploreCourses;
