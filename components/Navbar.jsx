'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Ellipsis, Search } from 'lucide-react';
import { findUrlApi } from '../app/actions/findUrlApi';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setFetching(true);

    try {
      const data = await findUrlApi(query);
      if (data.success) {
        toast.success(`Short link found: ${data.data.shortUrl}`);
        setQuery('');
      } else {
        toast.error(data.message || 'Short URL not found.');
      }
    } catch (error) {
      toast.error('Search failed. Please try again.');
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <nav className="w-full bg-purple-900 text-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <Image src="/logo.png" alt="BitLinks Logo" width={36} height={36} className="rounded-full" />
          <span>BitLinks</span>
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <Input
            type="text"
            placeholder="Search your short link"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 text-black bg-white placeholder:text-gray-500 rounded-md focus:ring-2 focus:ring-purple-400"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={18} />
          </div>
          <button
            disabled={fetching || !query.trim()}
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-purple-700 transition disabled:opacity-50"
            aria-label="Search"
          >
            {fetching ? <Ellipsis className="animate-pulse" size={20} /> : <Search size={20} />}
          </button>
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center">
          <Link href="/about" className="text-base hover:text-purple-300 transition">
            About Us
          </Link>
          <Link href="/shorten">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md shadow">
              Try Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
