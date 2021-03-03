import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_picture: null,
            preview: '',
            articles: [],
            user: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const articles = await fetch('/api/v1/articles/create/');
        const data = await articles.json();
        this.setState({articles: data});
        const users = await fetch('/rest-auth/user');
        const userData = await users.json();
        console.log(userData);
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

    handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('profile_picture', this.state.profile_picture);
        formData.append('user', Cookies.get('csrftoken'));
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

    async handleDelete(id) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'Application/Json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const response = await fetch(`/api/v1/articles/delete/${id}`, options);
        const data = await response.json();
        console.log(data);

    }


    render() {
        const articles = this.state.articles.map(article => <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.audio}</p>
            <button>Edit</button>
            <button onClick={() => this.handleDelete(article.id)}>Delete</button>
        </section>);
        return <>
            <h1>jpb3</h1>
            <img alt="jpb3"/>
            {articles}
            <form action="">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"/>
                <label htmlFor="body">Body</label>
                <textarea type="text" name="body" id="body"/>
                <button className="form-btn">Submit Article</button>
            </form>
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