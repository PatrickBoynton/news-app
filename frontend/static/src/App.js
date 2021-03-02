import './App.css';
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <form action="">
                    <h2>Login</h2>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password"/>
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? Why not <a href="#">Register</a> an account first.</p>
            </div>
        );
    }
}

export default App;
