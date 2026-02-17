import React from 'react';
import { THEMES } from '../context/ThemeContext';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
  return (
    <Layout theme={THEMES.home}>
      <div className="space-y-16">
        <Header />
        <About />
      </div>
    </Layout>
  );
}
