import './App.css';
import {Component} from 'react';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Astronomy from './components/Astronomy';
import Cookies from 'js-cookie';
import {Switch, Route} from 'react-router-dom';
import FullList from './components/FullList';

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
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }));
    }

    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn}/>
                <Switch>
                    {
                        // this.state.isLoggedIn
                            // ?
                            <>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/astronomy" component={Astronomy}/>
                                <Route exact path="/" component={FullList}/>
                            </>

                            // :
                            // <Route exact="/" component={FullList}/>
                    }
                </Switch>
            </div>
        );
    }
}

export default App;
