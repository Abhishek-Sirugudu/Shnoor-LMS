import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';

import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AddCompany from './components/admin/AddCompany';
import AdminCompanyManagement from './components/admin/AdminCompanyManagement';
import AdminUserManagement from './components/admin/AdminUserManagement';
import AdminProfileManagement from './components/admin/AdminProfileManagement';

import CompanyLayout from './components/company/CompanyLayout';
import CompanyDashboard from './components/company/CompanyDashboard';
import AddLearner from './components/company/AddLearner';
import AddInstructor from './components/company/AddInstructor';
import QuestionBank from './components/company/QuestionBank';
import CourseManagement from './components/company/CourseManagement';
import AddContent from './components/company/AddContent';
import DeleteContent from './components/company/DeleteContent';
import TestSeries from './components/company/TestSeries';

import LearnerLayout from './components/learner/LearnerLayout';
import LearnerDashboard from './components/learner/LearnerDashboard';
import LearnerCourses from './components/learner/LearnerCourses';
import LearnerPoints from './components/learner/LearnerPoints';
import VideoPlayer from './components/learner/VideoPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-company" element={<AddCompany />} />
          <Route path="company-management" element={<AdminCompanyManagement />} />
          <Route path="user-management" element={<AdminUserManagement />} />
          <Route path="profile-management" element={<AdminProfileManagement />} />
          <Route index element={<Navigate to="dashboard" />} />
        </Route>

        <Route path="/company" element={<CompanyLayout />}>
          <Route path="overview" element={<CompanyDashboard />} />
          <Route path="add-learner" element={<AddLearner />} />
          <Route path="add-instructor" element={<AddInstructor />} />
          <Route path="question-bank" element={<QuestionBank />} />
          <Route path="course-management" element={<CourseManagement />} />
          <Route path="add-content" element={<AddContent />} />
          <Route path="delete-content" element={<DeleteContent />} />
          <Route path="test-series" element={<TestSeries />} />
          <Route index element={<Navigate to="overview" />} />
        </Route>

        <Route path="/learner" element={<LearnerLayout />}>
          <Route path="dashboard" element={<LearnerDashboard />} />
          <Route path="courses" element={<LearnerCourses />} />
          <Route path="points" element={<LearnerPoints />} />
          <Route path="video-player" element={<VideoPlayer />} />
          <Route index element={<Navigate to="dashboard" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;