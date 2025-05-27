// app/not-found.js
'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 p-8">
      <h1 className="text-6xl font-extrabold text-purple-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page not found.</p>
      <Link href="/">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md shadow hover:bg-purple-700 transition-all">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
