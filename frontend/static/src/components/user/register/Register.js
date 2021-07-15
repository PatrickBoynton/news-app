import {Component} from 'react';
import Cookies from 'js-cookie';
import {NavLink} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        };

        this.handleRegister = this.handleRegister.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    async handleRegister(e, object) {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify(object)
        };

        const response = await fetch('/rest-auth/registration/', options);
        const data = await response.json().catch(error => console.log(error));
        if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return <>
            <form onSubmit={(e) => this.handleRegister(e, this.state)}>
                <p style={{textAlign: 'left', padding: '1rem'}}>Have a news story you want to share? Create an account and start submitting your stories today!</p>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input type="text"
                       name="username"
                       onChange={this.handleInput}
                       value={this.state.username}
                       id="username"/>
                <label htmlFor="email">Email</label>
                <input type="email"
                       onChange={this.handleInput}
                       value={this.state.email}
                       name="email"
                       id="email"/>
                <label htmlFor="password1">Password</label>
                <input type="password"
                       onChange={this.handleInput}
                       value={this.state.password1}
                       name="password1"
                       id="password1"/>
                <label htmlFor="password2">Confirm Password</label>
                <input type="password"
                       onChange={this.handleInput}
                       value={this.state.password2}
                       name="password2"
                       id="password2"/>
                <button className="form-btn" type="submit">Register</button>
                <p>Already have an account? Please <NavLink to="/login" className="link">Login</NavLink></p>
            </form>
        </>;
    }
}

export default Register;