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
        this.handleImage = this.handleImage.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }))
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({
            isloggedIn: !previousState.isloggedIn
        }))
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
        formData.append('user', object.username);
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
                    this.state.isLoggedIn
                        ?
                        <Profile handleIsLoggedIn={this.handleIsLoggedIn}
                                handleImage={this.handleImage}
                                 handleSubmit={this.handleSubmit}/>
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
