import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <header>
                    <nav>
                        <Link to="/news">GN</Link>
                        <Link to="/news">News</Link>
                        <Link to="/astronomy">Astronomy</Link>
                        <Link to="/cosmology">Cosmology</Link>
                        <Link to="/exoplanets">Exoplanets</Link>
                        <Link to="/editorial">Editorial</Link>
                        <Link to="/submit">Write an Article</Link>
                        <Link to="/logout">Logout </Link>
                    </nav>
                </header>
            );
        } else {
            return (
                <header>
                    <nav>
                        <NavLink className="brand" exact to="/">
                            GN
                        </NavLink>
                        <NavLink activeClassName="active" to="/news">
                            News
                        </NavLink>
                        <NavLink activeClassName="active" to="/astronomy">
                            Astronomy
                        </NavLink>
                        <NavLink activeClassName="active" to="/cosmology">
                            Cosmology
                        </NavLink>
                        <NavLink activeClassName="active" to="/exoplanets">
                            Exoplanets
                        </NavLink>
                        <NavLink activeClassName="active" to="/editorial">
                            Editorial
                        </NavLink>
                        <span>
              <NavLink activeClassName="active" to="/login">
                Login
              </NavLink>
              <NavLink activeClassName="active" to="/register">
                Register
              </NavLink>
            </span>
                    </nav>
                </header>
            );
        }
    }
}

export default Header;
