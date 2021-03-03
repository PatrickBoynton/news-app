import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_picture: null,
            preview: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleImage(e) {
        let file = e.target.files[0];
        this.setState({
            profile_picture: file,
        });

        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({preview: reader.result});
        };
        reader.readAsDataURL(file);
        e.preventDefault();
    }

    handleSubmit = async (e, object) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('profile_picture', this.state.profile_picture);
        formData.append('user', Cookies.get('csrftoken'))
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: formData
        };

        const response = await fetch('/api/v1/profiles/detail/', options);

        console.log(response);
    };

    handleLogout() {
        Cookies.remove('Authorization');
        this.props.handleIsLoggedIn();
    }


    render() {
        return <>
            <form action="" onSubmit={this.handleSubmit}>
                <input className="file" type="file" name="profile_picture" onChange={this.handleImage}/>
                {
                    this.state.profile_picture && <img src={this.state.preview} alt="preview"/>
                }
                <button className="form-btn" type="submit">Save</button>
            </form>
            <button onClick={() => this.handleLogout()} className="form-btn">Logout</button>
        </>;
    }
}

export default Profile;