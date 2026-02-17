import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Enquiries from '../components/Enquiries';

export default function EnquiriesPage() {
  return (
    <Layout theme={THEMES.contact}>
      <div className="space-y-16">
        <Enquiries />
      </div>
    </Layout>
  );
}
