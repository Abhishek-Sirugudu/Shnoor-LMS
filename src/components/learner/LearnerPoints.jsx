import React from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import '../Dashboard.css';

const LearnerPoints = () => {
  const leaderboard = [
    { id: 1, name: 'Alice', points: 240, rank: 1 },
    { id: 2, name: 'You (Test Student)', points: 137, rank: 2 },
    { id: 3, name: 'Bob', points: 120, rank: 3 },
    { id: 4, name: 'Charlie', points: 90, rank: 4 },
  ];

  return (
    <div>
      <div className="stats-grid">
         <div className="stat-card" style={{ background: 'linear-gradient(135deg, #003366 0%, #004488 100%)', color: 'white' }}>
            <span style={{ opacity: 0.8 }}>Your Current Rank</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>#2</div>
         </div>
      </div>

      <div className="table-container">
        <div className="table-header">
           <h3>Class Leaderboard</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Rank</th>
              <th>Student Name</th>
              <th style={{ textAlign: 'right' }}>Total XP</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((p) => (
              <tr key={p.id} style={{ background: p.name.startsWith('You') ? '#eff6ff' : 'transparent' }}>
                <td>
                  {p.rank === 1 && <FaTrophy color="#ca8a04" />}
                  {p.rank === 2 && <FaMedal color="#94a3b8" />}
                  {p.rank === 3 && <FaMedal color="#b45309" />}
                  {p.rank > 3 && <span style={{ fontWeight: 'bold', color: '#6b7280', paddingLeft: '4px' }}>{p.rank}</span>}
                </td>
                <td style={{ fontWeight: p.name.startsWith('You') ? 'bold' : 'normal', color: p.name.startsWith('You') ? '#003366' : 'inherit' }}>
                  {p.name}
                </td>
                <td style={{ textAlign: 'right', fontWeight: 'bold' }}>{p.points} XP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LearnerPoints;