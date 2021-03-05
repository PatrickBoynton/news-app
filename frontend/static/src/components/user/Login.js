import {Component} from 'react';
import Cookies from 'js-cookie';
import {NavLink} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    async handleLogin(e, object) {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                username: object.username,
                email: object.email,
                password: object.password
            }),
        };
        const response = await fetch('/rest-auth/login/', options);
        const data = await response.json().catch(error => console.log(error));

        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
            this.props.handleLoggedIn();
        } else {
            console.log(data);
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return <>
            <form action="" onSubmit={(e) => this.handleLogin(e, this.state)}>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input type="text"
                       onChange={this.handleInput}
                       value={this.state.username}
                       name="username"
                       id="username"/>
                <label htmlFor="email">Email</label>
                <input type="email"
                       onChange={this.handleInput}
                       value={this.state.email}
                       name="email"
                       id="email"/>
                <label htmlFor="password">password</label>
                <input type="password"
                       onChange={this.handleInput}
                       value={this.state.password}
                       name="password"
                       id="password"/>
                <button className="form-btn" type="submit">Login</button>
                <p>Don't have an account? Why not <NavLink to="/register" className="link">Register</NavLink> an
                account first.
            </p>
            </form>
        </>;
    }
}

export default Login;

