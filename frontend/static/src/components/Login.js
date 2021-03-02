import {Component} from 'react';

class Login extends Component {
    render() {
        return <>
            <form action="" onSubmit={(e) => this.props.handleLogin(e)}>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input type="text"
                       onChange={this.props.handleInput}
                       value={this.props.username}
                       name="username"
                       id="username"/>
                <label htmlFor="email">Email</label>
                <input type="email"
                       onChange={this.props.handleInput}
                       value={this.props.email}
                       name="email"
                       id="email"/>
                <label htmlFor="password">password</label>
                <input type="password"
                       onChange={this.props.handleInput}
                       value={this.props.password}
                       name="password"
                       id="password"/>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? Why not <a onClick={() => this.props.handleLoginOrRegister()} href="#">Register</a> an account first.</p>
        </>
    }
}

export default Login

