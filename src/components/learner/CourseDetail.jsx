import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPlay, FaCheckCircle, FaStar, FaUserTie, FaClock, FaBookOpen } from 'react-icons/fa';
import '../Dashboard.css';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isEnrolled, setIsEnrolled] = useState(false);


    const course = {
        id: id,
        title: "Introduction to Python Programming",
        instructor: "Dr. Angela Yu",
        rating: 4.8,
        reviews: 1250,
        price: "₹499",
        description: "Learn Python from scratch. Master Python by building 100 projects in 100 days. This course is perfect for beginners and intermediate learners.",
        duration: "12 Hours",
        lessons: 45,
        hasCertificate: Math.random() < 0.5,
        syllabus: [
            "Introduction to Python",
            "Variables and Data Types",
            "Control Flow and Logical Operators",
            "Randomisation and Python Lists",
            "Python Loops",
            "Functions and Karel"
        ]
    };

    const handleEnroll = () => {

        setTimeout(() => {
            setIsEnrolled(true);
            alert("Enrolled Successfully!");
        }, 500);
    };

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

            <div style={{
                background: 'linear-gradient(to right, #111827, #374151)',
                color: 'white',
                borderRadius: '12px',
                padding: '30px',
                display: 'flex',
                gap: '30px',
                marginBottom: '30px',
                flexWrap: 'wrap'
            }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{course.title}</h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '20px' }}>{course.description}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px', fontSize: '0.9rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaStar color="#fbbf24" /> {course.rating} ({course.reviews} reviews)</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaUserTie /> {course.instructor}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaClock /> {course.duration}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        {isEnrolled ? (
                            <button
                                onClick={() => navigate('/learner/video-player')}
                                className="btn-primary"
                                style={{ background: '#10b981', borderColor: '#10b981', fontWeight: 'bold' }}
                            >
                                <FaPlay style={{ marginRight: '8px' }} /> Go to Class
                            </button>
                        ) : (
                            <>
                                <button onClick={handleEnroll} className="btn-primary" style={{ padding: '12px 24px', fontSize: '1.1rem' }}>
                                    Enroll Now for {course.price}
                                </button>
                                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>30-Day Money-Back Guarantee</span>
                            </>
                        )}
                    </div>
                </div>


                <div style={{
                    width: '350px',
                    height: '200px',
                    background: 'black',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    <FaPlay style={{ fontSize: '3rem', color: 'white', opacity: 0.8 }} />
                    <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem' }}>Course Preview</span>
                </div>
            </div>

            {/* Content Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>

                {/* Left Column: Syllabus & Description */}
                <div>
                    <div style={{ background: 'white', padding: '25px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
                        <h3 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '10px', marginBottom: '15px', color: '#1f2937' }}>Course Content</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '0.9rem', color: '#6b7280', marginBottom: '20px' }}>
                            <span><FaBookOpen /> {course.lessons} Lessons</span>
                            <span><FaClock /> {course.duration} Total Length</span>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {course.syllabus.map((item, index) => (
                                <li key={index} style={{
                                    padding: '12px 15px',
                                    borderBottom: '1px solid #f3f4f6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <FaPlay size={12} color="#9ca3af" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ background: 'white', padding: '25px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                        <h3 style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '10px', marginBottom: '15px', color: '#1f2937' }}>Description</h3>
                        <p style={{ lineHeight: '1.6', color: '#4b5563' }}>
                            {course.description}
                            <br /><br />
                            This course provides a comprehensive introduction to Python, one of the most popular programming languages in the world. You will learn about variables, loops, functions, and object-oriented programming. By the end of this course, you will be able to write your own Python scripts and build simple applications.
                        </p>
                    </div>
                </div>

                {/* Right Column: Instructor & Features */}
                <div>
                    <div style={{ background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '20px' }}>
                        <h4 style={{ margin: '0 0 15px 0', color: '#1f2937' }}>Instructor</h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ width: '50px', height: '50px', background: '#d1d5db', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FaUserTie size={24} color="#6b7280" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{course.instructor}</div>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Senior Developer</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                        <h4 style={{ margin: '0 0 15px 0', color: '#1f2937' }}>Includes</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#4b5563' }}>
                            <li style={{ padding: '5px 0' }}><FaCheckCircle color="#10b981" style={{ marginRight: '8px' }} /> Lifetime Access</li>
                            {course.hasCertificate && (
                                <li style={{ padding: '5px 0' }}><FaCheckCircle color="#10b981" style={{ marginRight: '8px' }} /> Certificate of Completion</li>
                            )}
                            <li style={{ padding: '5px 0' }}><FaCheckCircle color="#10b981" style={{ marginRight: '8px' }} /> 5 Downloadable Resources</li>
                            <li style={{ padding: '5px 0' }}><FaCheckCircle color="#10b981" style={{ marginRight: '8px' }} /> Mobile Access</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseDetail;
