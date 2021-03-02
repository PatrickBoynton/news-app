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
            username: "",
            email: "",
            password: "",
            password1: "",
            password2: "",
            preview_picture: null,
            preview: ""
        }
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleImage = this.handleImage.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }))
    }

    async handleLogin(e, object) {
        const options = {
            method: "POST",
            headers: {
                "ContentType": "Application/Json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: JSON.stringify({
                username: object.username,
                email: object.email,
                password: object.password
            }),
        }
        const response = await fetch("/rest-auth/login", options);
        const data = await response.json().catch(error => console.log(error));
        if (data.key) {
            Cookies.set("Authorization", `Token ${data.key}`)
        }
        this.setState({isLoggedIn: !!Cookies.get("Authorization")})
        e.preventDefault();
    }

    async handleRegister(e, object) {
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "Application/Json",
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: {
                body: JSON.stringify(object)
            }
        }

        const response = await fetch("/rest-auth/registration/", options);
        const data = await response.json().catch(error => console.log(error));
        console.log(data);
        if (data.key) {
            Cookies.set("Authorization", `Token ${data.key}`)
        } else {
            console.log(data);
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleImage(e) {
        let file = e.target.files[0];
        this.setState({
            profile_picture: file,
        })

        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({preview: reader.result})
        }
        reader.readAsDataURL(file);
        e.preventDefault();
    }

    handleSubmit = async (e, object) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('profile_picture', this.state.profile_picture);
        formData.append('user', object.id);
        const options = {
            method: "POST",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken")
            },
            body: formData
        }

        const response = await fetch("/profiles/", options);

        console.log(response);
    }



    render() {
        return (
            <div className="App">
                {
                    this.state.loginOrRegister
                        ?
                        <Login handleInput={this.handleInput}
                               handleLogin={this.handleLogin}
                               handleLoginOrRegister={this.handleLoginOrRegister}/>
                        :
                        <Register user={this.state.user}
                                  handleInput={this.handleInput}
                                  handleRegister={this.handleRegister}
                                  handleLoginOrRegister={this.handleLoginOrRegister}/>
                }
                <Profile handleImage={this.handleImage}
                         handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
