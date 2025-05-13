import { Link } from "react-router-dom";

function Navbar() {
    return <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/registration'>Register Account</Link></li>
                <li><Link to='/login'>Log In</Link></li>
            </ul>
        </nav>
    </div>
}

export default Navbar;