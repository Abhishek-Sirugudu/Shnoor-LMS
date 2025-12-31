import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerPoints = () => {
  const leaderboard = [
    { id: 1, name: 'Alice Johnson', points: 2450, rank: 1, avatar: '👩‍🎓' },
    { id: 2, name: 'You (Test Student)', points: 1370, rank: 2, avatar: '👤' },
    { id: 3, name: 'Robert Smith', points: 1200, rank: 3, avatar: '👨‍🎓' },
    { id: 4, name: 'Charlie Brown', points: 950, rank: 4, avatar: '👦' },
    { id: 5, name: 'Dana White', points: 800, rank: 5, avatar: '👧' },
  ];

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #003366 0%, #002244 100%)', color: 'white', border: 'none' }}>
          <span style={{ opacity: 0.9, fontSize: '0.9rem' }}>Current Rank</span>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '15px' }}>
            #2 <span style={{ fontSize: '1rem', fontWeight: 'normal', background: 'rgba(255,255,255,0.2)', padding: '5px 12px', borderRadius: '20px' }}>Top 5%</span>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Academy Leaderboard</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: '80px', textAlign: 'center' }}>Rank</th>
              <th>Student</th>
              <th style={{ textAlign: 'right' }}>Total XP</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((p) => (
              <tr key={p.id} style={{
                background: p.name.startsWith('You') ? '#e0f2fe' : 'transparent',
                borderLeft: p.name.startsWith('You') ? '4px solid #003366' : '4px solid transparent'
              }}>
                <td style={{ textAlign: 'center' }}>
                  {p.rank === 1 && <FaTrophy size={20} color="#eab308" />}
                  {p.rank === 2 && <FaMedal size={20} color="#94a3b8" />}
                  {p.rank === 3 && <FaMedal size={20} color="#b45309" />}
                  {p.rank > 3 && <span style={{ fontWeight: 'bold', color: '#6b7280' }}>{p.rank}</span>}
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{p.avatar}</span>
                    <span style={{ fontWeight: p.name.startsWith('You') ? 'bold' : '500', color: p.name.startsWith('You') ? '#003366' : '#374151' }}>
                      {p.name}
                    </span>
                  </div>
                </td>
                <td style={{ textAlign: 'right', fontWeight: 'bold', color: '#166534' }}>{p.points} XP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnerPoints;