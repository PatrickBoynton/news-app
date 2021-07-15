import './App.css';
import {Component} from 'react';
import Header from './components/header/Header';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import Compose from './components/user/Compose';
import Astronomy from './components/news-filters/astronomy/Astronomy';
import Cookies from 'js-cookie';
import {Switch, Route} from 'react-router-dom';
import FullList from './components/news-filters/full-list/FullList';
import Cosmology from './components/news-filters/cosmology/Cosmology';
import Exoplanets from './components/news-filters/Exoplanets';
import Editorial from './components/news-filters/Editorial';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginOrRegister: false,
            isLoggedIn: !!Cookies.get('Authorization'),
            preview_picture: null,
            preview: ''
        };
        this.handleLoginOrRegister = this.handleLoginOrRegister.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }));
    }

    handleLogin() {
        this.setState({isLoggedIn: !!Cookies.get('Authorization')});
    }

    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn}/>
                <Switch>
                    <Route path="/submit" render={(props) => <Compose {...props} isLoggedIn={this.state.isLoggedIn}/>}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" render={(props) => <Login {...props} isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>}/>
                    <Route path="/astronomy" component={Astronomy}/>
                    <Route path="/cosmology" component={Cosmology}/>
                    <Route path="/exoplanets" component={Exoplanets}/>
                    <Route path="/editorial" component={Editorial}/>
                    <Route path="/" component={FullList}/>
                </Switch>
            </div>
        );
    }
}

export default App;
