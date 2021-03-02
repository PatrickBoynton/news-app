import { Component } from 'react';

class Register extends Component{
    render() {
        return <>
            <form onSubmit={(e) => this.props.handleRegister(e)}>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"/>
                <label htmlFor="password1">Password</label>
                <input type="password" name="password1" id="password1"/>
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" id="password2"/>
                <button type="submit">Register</button>
                <p>Already have an account? Please <a onClick={() => this.props.handleLoginOrRegister()} href="#">Login</a> </p>
            </form>
        </>
    }
}

export default Register