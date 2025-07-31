import { Link } from 'react-router'
import React from 'react'

function Nav() {
    return (
        <nav className='text-4xl underline p-8 border border-black'>
            <Link to="/">Home / </Link>
            <Link to="/Articles">Articles / </Link>
            <Link to="/Topics">Topics</Link>
        </nav>
    )
}

export default Nav