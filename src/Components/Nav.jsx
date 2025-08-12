import { Link } from 'react-router'
import React from 'react'

function Nav() {
    return (
        <nav className='font-mono text-2xl md:text-3xl lg:text-4xl dark:bg-gray-700  p-8 border border-black flex gap-4'>
            <Link className='hover:font-bold dark:text-white' to="/">Home</Link>
            <span className='dark:text-white' >/</span>
            <Link  className='hover:font-bold dark:text-white'  to="/Articles">Articles</Link>
            <span className='dark:text-white'>/</span>
            <Link  className='hover:font-bold dark:text-white'  to="/Topics">Topics</Link>
        </nav>
    )
}

export default Nav