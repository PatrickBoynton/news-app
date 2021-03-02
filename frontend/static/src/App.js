import './App.css';
import {Component} from "react";
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOrRegister: true
        }
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }))
    }

    handleLogin(e) {
        console.log(e);
    }
    handleRegister(e) {
        console.log(e);
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.loginOrRegister
                        ?
                        <Login handleLogin={this.handleLogin}
                               handleLoginOrRegister={this.handleLoginOrRegister}/>
                        :
                        <Register handleLoginOrRegister={this.handleLoginOrRegister}/>
                }
            </div>
        );
    }
}

export default App;
