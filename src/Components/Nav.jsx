import { Link } from 'react-router'
import React from 'react'

function Nav() {
    return (
        <nav>
            <Link to="/">Home / </Link>
            <Link to="/Articles">Articles / </Link>
            <Link to="/Topics">Topics / </Link>
            <Link to="/Users">Users</Link>
        </nav>
    )
}

export default Nav