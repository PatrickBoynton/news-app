import {Component} from 'react';
import {Switch} from 'react-router-dom';
import FullList from './FullList';
import {Link} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

class Header extends Component {
    render() {
        return <header>
            <nav>
                <Switch>
                    <Link to="/profile" render={
                        (props) => <Profile {...props} isLoggedIn={this.props.isLoggedIn}/>
                    }/>
                    <Link to="/" component={FullList}/>
                </Switch>
            </nav>
            {
                this.props.isLoggedIn
                    ?
                    <Login isLoggedIn={this.props.isLoggedIn}/>
                    :
                    null
            }
        </header>;
    }
}

export default Header;