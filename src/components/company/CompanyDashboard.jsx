import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaTasks, FaChartLine, FaCalendarAlt, FaPlus, FaList, FaBook, FaTrash } from 'react-icons/fa';
import '../Dashboard.css';

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const [isTrialActive, setIsTrialActive] = useState(true);


  const kpis = {
    totalStudents: 150,
    pendingActions: 5,
    engagement: '75%',
    nextBill: 'Dec 30'
  };

  return (
    <div>

      {isTrialActive && (
        <div style={{
          background: '#fee2e2', color: '#b91c1c', padding: '12px 20px', borderRadius: '8px',
          marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: '1px solid #fecaca'
        }}>
          <div>
            <strong>Trial Active:</strong> You have 4 days left in your Free Trial.
          </div>
          <button className="btn-primary" style={{ background: '#b91c1c', border: 'none', padding: '6px 15px', fontSize: '0.85rem' }}>
            Upgrade Now
          </button>
        </div>
      )}

      <div className="stats-grid">

        <div className="stat-card blue">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Total Students</span>
              <div className="stat-number">{kpis.totalStudents}</div>
            </div>
            <div className="icon-circle blue"><FaUsers size={20} /></div>
          </div>
        </div>


        <div className="stat-card yellow">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Pending Actions</span>
              <div className="stat-number">{kpis.pendingActions}</div>
            </div>
            <div className="icon-circle yellow"><FaTasks size={20} /></div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#92400e', marginTop: '5px' }}>Assignments to grade</div>
        </div>


        <div className="stat-card green">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Course Engagement</span>
              <div className="stat-number">{kpis.engagement}</div>
            </div>
            <div className="icon-circle green"><FaChartLine size={20} /></div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#065f46', marginTop: '5px' }}>Avg. completion rate</div>
        </div>


        <div className="stat-card indigo">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span className="stat-label">Next Bill Due</span>
              <div className="stat-number" style={{ fontSize: '1.5rem' }}>{kpis.nextBill}</div>
            </div>
            <div className="icon-circle indigo"><FaCalendarAlt size={20} /></div>
          </div>
        </div>
      </div>

      <div className="action-buttons-grid" style={{ display: 'flex', gap: '15px', margin: '25px 0', flexWrap: 'wrap' }}>
        <button onClick={() => navigate('/company/add-learner')} className="btn-action"><FaPlus /> Add Learner</button>
        <button onClick={() => navigate('/company/add-instructor')} className="btn-action"><FaPlus /> Add Instructor</button>
        <button onClick={() => navigate('/company/course-management')} className="btn-action"><FaList /> Course Management</button>
        <button onClick={() => navigate('/company/question-bank')} className="btn-action"><FaBook /> Question Bank</button>
      </div>


      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px' }}>


        <div className="stat-card" style={{ borderLeft: 'none', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 20px 0', color: '#374151' }}>Student Activity (Last 7 Days)</h4>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 10px' }}>
            {[40, 65, 30, 85, 55, 90, 75].map((h, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '30px', height: `${h}%`, background: '#3b82f6', borderRadius: '4px' }}></div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Test Score Distribution Placeholder */}
        <div className="stat-card" style={{ borderLeft: 'none', height: '300px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ margin: '0 0 20px 0', color: '#374151' }}>Test Score Distribution</h4>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Bell Curve CSS Mock */}
            <div style={{
              width: '100%', height: '150px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.2) 20%, rgba(16, 185, 129, 0.6) 50%, rgba(16, 185, 129, 0.2) 80%, transparent 100%)',
              clipPath: 'polygon(0% 100%, 10% 90%, 25% 60%, 50% 10%, 75% 60%, 90% 90%, 100% 100%)',
              position: 'absolute', bottom: '30px'
            }}></div>
            <div style={{ position: 'absolute', bottom: '10px', width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#6b7280' }}>
              <span>Fail</span>
              <span>Pass</span>
              <span>Excel</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyDashboard;