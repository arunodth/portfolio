import React from 'react';
import Layout from '../components/Layout';
import { THEMES } from '../context/ThemeContext';
import StripeBuyButton from '../components/StripeBuyButton';

export default function ServicesPage() {
  return (
    <Layout theme={THEMES.contact}>
      <div className="space-y-8">
        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-400 to-rose-500">
              My Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional cloud & technical operations services. Choose from our offerings below.
          </p>
        </div>

        {/* Services Section */}
        <div className="py-8">
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Professional Services</h2>
            <p className="text-gray-300 mb-6">
              Secure your consultation and professional services through our encrypted payment system.
            </p>
            
            {/* Stripe Buy Button */}
            <StripeBuyButton />
          </div>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6 py-8">
          <div className="bg-gray-900/50 border border-pink-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-pink-400 mb-3">✓ Secure Payments</h3>
            <p className="text-gray-400">Industry-standard encryption and Stripe-powered security for all transactions.</p>
          </div>
          <div className="bg-gray-900/50 border border-pink-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-pink-400 mb-3">✓ Quick Setup</h3>
            <p className="text-gray-400">Get started immediately with our straightforward booking and payment process.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
