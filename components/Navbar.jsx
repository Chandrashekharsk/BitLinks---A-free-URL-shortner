'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Ellipsis, LucideClockFading, Search } from 'lucide-react';
import { findUrlApi } from "../app/actions/findUrlApi";
import toast from 'react-hot-toast';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleSearch = async () => {
    setFetching(true);   
    if (!query.trim()) return;
    
    try {
      const data = await findUrlApi(query);
      if (data.success) {
        toast.success(`short-link found: ${data.data.shortUrl}`);
        setQuery(''); 
      } else {
        toast.error(data.message || 'Short URL not found. Please Create a new one.');
      }
    } catch (error) {
      
      toast.error('Something went wrong while searching');
      console.error(error);
    }finally{
      setFetching(false);
    }   
  };

  return (
    <nav className='h-20 bg-purple-900 px-6 flex items-center justify-between text-white shadow-md'>
      {/* Logo Section */}
      <Link href="/" className='flex items-center gap-2 text-2xl font-bold'>
        <Image src='/logo.png' alt="logo" width={36} height={36} className='rounded-full' />
        <span>BitLinks</span>
      </Link>

      {/* Search Bar Section */}
      <div className='relative w-full max-w-md flex items-center bg-white rounded-md shadow-sm'>
        <Input
          type="text"
          placeholder="Type your URL to search custom short link"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-black px-4 py-2 pl-10 rounded-md border-0 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        {fetching? (
          <Ellipsis className='absolute right-1 top-1/2 -translate-y-1/2 bg-transparent text-black   pr-2 py-1 text-sm rounded-full'/>
        ):
        (
          <button
          onClick={handleSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent text-black   pr-2 py-1 text-sm rounded-full "
        >
          <Search className=' ' height={20} width={20}/>
        </button>
        )}
      </div>

      {/* Links Section */}
      <ul className='flex items-center gap-5 text-base font-medium'>
        <li>
          <Link href="/about" className='hover:text-purple-300 transition'>About Us</Link>
        </li>
        <li>
          <Link href="/shorten">
            <Button className='bg-purple-600 hover:bg-purple-700 shadow-sm text-white'>
              Try Now
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
