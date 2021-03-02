import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const options = {
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
        };

        Cookies.remove("Authorization")
        this.setState({isLoggedIn: false})
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