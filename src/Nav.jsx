import { Link } from 'react-router'

function Nav() {
    return (
        <nav>
            <Link to="/">Home / </Link>
            <Link to="/articles">Articles / </Link>
            <Link to="/Topics">Topics / </Link>
            <Link to="/Users">Users</Link>
        </nav>
    )
}

export default Nav