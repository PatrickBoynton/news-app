import {Component} from 'react';
import Cookies from 'js-cookie';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_picture: null,
            isEditMode: false,
            preview: '',
            articles: [],
            user: '',
            title: '',
            body: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEditOrPost = this.handleEditOrPost(this);
    }

    async componentDidMount() {
        const articles = await fetch('/api/v1/articles/create/');
        const data = await articles.json();
        this.setState({articles: data});
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

    async handleEdit(article) {
        // const options = {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'Application/Json',
        //         'X-CSRFToken': Cookies.get('csrftoken')
        //     },
        //     body: JSON.stringify({
        //         author: this.state.articles[0].author,
        //         title: this.state.title,
        //         body: this.state.body,
        //     })
        // };
        // const response = await fetch(`/api/v1/articles/edit/${article.id}/`, options);
        // const data = await response.json();
        this.setState({title: article.title, body: article.body});
        // this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
    }
    handleEditOrPost() {
        
    }

    handleInput(event) {
        this.setState({[event.target.name]: [event.target.value]})
    }

    render() {
        const articles = this.state.articles.map(article => <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.author}</p>
            <button onClick={() => this.handleEdit(article)}>Edit</button>
            <button onClick={() => this.handleDelete(article.id)}>Delete</button>
        </section>);
        return <>
            <h1>jpb3</h1>
            <img alt="jpb3"/>
            {articles}
            <form action="">
                <label htmlFor="title">Title</label>
                <input type="text"
                       value={this.state.title}
                       onChange={this.handleInput}
                       name="title"
                       id="title"/>
                <label htmlFor="body">Body</label>
                <textarea
                    value={this.state.body}
                    onChange={this.handleInput}
                    type="text"
                    name="body"
                    id="body"/>
                {
                    !this.state.isEditMode
                 ?
                 <button className="form-btn" type="submit">Submit an Article</button>
                 :
                <button className="form-btn" type="submit">Edit your article</button>
                }
            </form>
            <form action="" onSubmit={this.handleSubmit}>
                <input className="file" type="file" name="profile_picture" onChange={this.handleImage}/>
                {
                    this.state.profile_picture && <img src={this.state.preview} alt="preview"/>
                }
            </form>
            <button onClick={() => this.handleLogout()} className="form-btn">Logout</button>
        </>;
    }
}

export default Profile;