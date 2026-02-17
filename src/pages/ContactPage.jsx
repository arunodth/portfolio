import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <Layout theme={THEMES.contact}>
      <div className="space-y-16">
        <Contact />
      </div>
    </Layout>
  );
}
