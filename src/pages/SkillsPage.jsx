import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <Layout theme={THEMES.skills}>
      <div className="space-y-16">
        <Skills />
      </div>
    </Layout>
  );
}
