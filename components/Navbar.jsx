import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-800 px-3 flex justify-between text-white items-center'>
      <div className="logo font-bold ">
        <Link className='flex items-center justify-center gap-2 text-xl' href="/"><Image src='/logo.png' alt="logo" width={30} height={30} /> BitLinks</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/about"> <li>About Us</li> </Link>
        <li className='flex gap-3'>
          <Link href="/shorten"> <button className= 'font-bold bg-purple-500 rounded-lg py-1 shadow-lg p-3'>Try Now</button> </Link> 
        </li>
      </ul>
    </nav>
  )
}

export default Navbar