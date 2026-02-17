import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <Layout theme={THEMES.experience}>
      <div className="space-y-16">
        <Experience />
      </div>
    </Layout>
  );
}
