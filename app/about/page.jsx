import Navbar from '@/components/Navbar';
import React from 'react';

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600">
            About BitLinks
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            BitLinks is your go-to tool for shortening, managing, and tracking your URLs efficiently...
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500">🚀 Fast & Reliable</h2>
            <p className="text-gray-600">We provide a lightning-fast URL shortening service...</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500">📊 Analytics</h2>
            <p className="text-gray-600">Track link clicks, view real-time data...</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500">🔒 Secure</h2>
            <p className="text-gray-600">Your links are protected and private...</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-500">🎯 Custom URLs</h2>
            <p className="text-gray-600">Want a personalized touch? Create branded or custom short links...</p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Built for developers, marketers, and creators
          </h3>
          <p className="text-gray-600 text-md">
            BitLinks was crafted to solve real problems — long, ugly, and hard-to-remember URLs...
          </p>
        </div>
      </div>
    </>
  );
}
