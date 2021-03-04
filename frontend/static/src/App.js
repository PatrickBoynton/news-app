import './App.css';
import {Component} from 'react';
import Header from './components/Header';

import Cookies from 'js-cookie';

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
        this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
    }

    handleLoginOrRegister() {
        this.setState((previousState) => ({
            loginOrRegister: !previousState.loginOrRegister
        }));
    }

    handleIsLoggedIn() {
        this.setState((previousState) => ({
            isLoggedIn: !previousState.isloggedIn
        }));
    }

    render() {
        return (
            <div className="App">
                {/*{*/}
                {/*    // this.state.isLoggedIn*/}
                {/*    //     ?*/}
                {/*    //     <Profile handleIsLoggedIn={this.handleIsLoggedIn}/>*/}
                {/*    //     :*/}
                {/*    //     this.state.loginOrRegister*/}
                {/*    //         ?*/}
                {/*    //         <>*/}
                {/*    //         <div className="split">*/}
                {/*    //             <Login handleLoggedIn={this.handleIsLoggedIn}*/}
                {/*    //                    handleLoginOrRegister={this.handleLoginOrRegister}/>*/}
                {/*    //             <FullList/>*/}
                {/*    //         </div>*/}
                {/*    //         </>*/}
                {/*    //         :*/}
                {/*    //         <div className="split">*/}
                {/*    //         <Register handleLoginOrRegister={this.handleLoginOrRegister}/>*/}
                {/*    //         <FullList/>*/}
                {/*// }*/}
                <Header isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default App;
