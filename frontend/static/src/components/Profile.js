import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        Cookies.remove('Authorization');
        this.props.handleIsLoggedIn();
    }

    render() {
        return <>
            <form action="" onSubmit={this.props.handleSubmit}>
                <input className="file" type="file" name="profile_picture" onChange={this.props.handleImage}/>
                {
                    this.props.profile_picture && <img src={this.props.preview} alt="preview"/>
                }
                <button className="form-btn" type="submit">Save</button>
            </form>
            <button onClick={() => this.handleLogout()} className="form-btn">Logout</button>
        </>;
    }
}

export default Profile;