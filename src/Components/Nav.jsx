import { Link } from 'react-router'
import React from 'react'

function Nav() {
    return (
        <nav className='font-mono text-2xl md:text-3xl lg:text-4xl p-8 border border-black'>
            <Link className='hover:font-bold' to="/">Home</Link>
            <> / </>
            <Link className='hover:font-bold'  to="/Articles">Articles</Link>
            <> / </>
            <Link className='hover:font-bold'  to="/Topics">Topics</Link>
        </nav>
    )
}

export default Nav