import { Component } from 'react';

class Register extends Component{
    render() {
        return <>
            <form onSubmit={(e) => this.props.handleRegister(e, this.props)}>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input type="text"
                       name="username"
                       onChange={this.props.handleInput}
                       value={this.props.username}
                       id="username"/>
                <label htmlFor="email">Email</label>
                <input type="email"
                       onChange={this.props.handleInput}
                       value={this.props.email}
                       name="email"
                       id="email"/>
                <label htmlFor="password1">Password</label>
                <input type="password"
                       onChange={this.props.handleInput}
                       value={this.props.password1}
                       name="password1"
                       id="password1"/>
                <label htmlFor="password2">Confirm Password</label>
                <input type="password"
                       onChange={this.props.handleInput}
                       value={this.props.password2}
                       name="password2"
                       id="password2"/>
                <button type="submit">Register</button>
                <p>Already have an account? Please <button class="link" onClick={() => this.props.handleLoginOrRegister()} href="#">Login</button> </p>
            </form>
        </>
    }
}

export default Register