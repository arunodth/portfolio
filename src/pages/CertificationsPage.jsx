import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Certifications from '../components/Certifications';

export default function CertificationsPage() {
  return (
    <Layout theme={THEMES.certifications}>
      <div className="space-y-16">
        <Certifications />
      </div>
    </Layout>
  );
}
