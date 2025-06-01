import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8 mt-15">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo or Brand */}
        <div className="text-xl font-bold text-blue-600">
          BitLinks
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Privacy Policy</Link>
          <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Terms of Service</Link>
          <Link href="/" className="hover:text-blue-600 transition-colors duration-300">Support</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-300">About Us</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-600">
          <a
            href="https://github.com/Chandrashekharsk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://x.com/cs9981625252"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chandrashekharsk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BitLinks. All rights reserved.
      </div>
    </footer>
  );
}
