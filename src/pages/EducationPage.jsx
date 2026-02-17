import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Education from '../components/Education';

export default function EducationPage() {
  return (
    <Layout theme={THEMES.education}>
      <div className="space-y-16">
        <Education />
      </div>
    </Layout>
  );
}
