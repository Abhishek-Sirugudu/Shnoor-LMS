import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import AddCompany from './components/admin/AddCompany';

import CompanyLayout from './components/company/CompanyLayout';
import CompanyDashboard from './components/company/CompanyDashboard';
import AddStudent from './components/company/AddStudent';
import AddTeacher from './components/company/AddTeacher';
import QuestionBank from './components/company/QuestionBank';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/admin" element={<AdminLayout />}>
           <Route path="dashboard" element={<AdminDashboard />} />
           <Route path="add-company" element={<AddCompany />} />
           <Route index element={<Navigate to="dashboard" />} />
        </Route>

        <Route path="/company" element={<CompanyLayout />}>
          <Route path="overview" element={<CompanyDashboard />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="question-bank" element={<QuestionBank />} />
          <Route index element={<Navigate to="overview" />} />
        </Route> 

      </Routes>
    </Router>
  );
}

export default App;