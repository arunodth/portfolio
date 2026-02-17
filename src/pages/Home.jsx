import React from 'react';
import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
  return (
    <div className="space-y-16">
      <Header />
      <About />
    </div>
  );
}
