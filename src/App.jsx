import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import ContactPage from './pages/ContactPage';
import EnquiriesPage from './pages/EnquiriesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/enquiries" element={<EnquiriesPage />} />
    </Routes>
  );
}

export default App;
