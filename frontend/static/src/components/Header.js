import {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        console.log(this.props.isLoggedIn);
        if(this.props.isLoggedIn) {
            return <header>
            <nav>
                <Link to="/news">News</Link>
                <Link to="/astronomy">Astronomy</Link>
                <Link to="/cosmology">Cosmology</Link>
                <Link to="/exoplanets">Exoplanets</Link>
                <Link to="/editorial">Editorial</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/"/>
            </nav>
        </header>;
        } else{
            return <header>
            <nav>
                <Link to="/news">News</Link>
                <Link to="/astronomy">Astronomy</Link>
                <Link to="/cosmology">Cosmology</Link>
                <Link to="/exoplanets">Exoplanets</Link>
                <Link to="/editorial">Editorial</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/"/>
            </nav>
        </header>;
        }

    }
}

export default Header;