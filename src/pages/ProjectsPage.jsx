import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <Layout theme={THEMES.projects}>
      <div className="space-y-16">
        <Projects />
      </div>
    </Layout>
  );
}
