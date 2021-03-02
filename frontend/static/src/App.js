import './App.css';
import {Component} from "react";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

import Cookies from 'js-cookie'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOrRegister: true,
            isLoggedIn: !!Cookies.get("Authorization"),
            preview_picture: null,
            preview: ""
        }
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }))
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({
            isLoggedIn: !previousState.isloggedIn
        }))
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.isLoggedIn
                        ?
                        <Profile handleIsLoggedIn={this.handleIsLoggedIn}/>
                        :
                        this.state.loginOrRegister
                            ?
                            <Login handleLoggedIn={this.handleIsLoggedIn}
                                   handleLoginOrRegister={this.handleLoginOrRegister}/>
                            :
                            <Register handleLoginOrRegister={this.handleLoginOrRegister}/>
                }

            </div>
        );
    }
}

export default App;
