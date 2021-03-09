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
            id: 0,
            author: '',
            title: '',
            body: '',
            article_type: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleEditOrPost = this.handleEditOrPost.bind(this);
    }

    async componentDidMount() {
        const articles = await fetch('/api/v1/articles/');
        const data = await articles.json().catch(error => console.log(error));
        const user = await fetch('/rest-auth/user');
        const userData = await user.json();
        const articles_by_user = data.filter(x => x.author === userData.username);
        if (data !== undefined) {
            this.setState({articles: articles_by_user});
        } else {
            this.setState({articles: []});
        }
        this.setState({user: userData.username});
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
    };

    handleLogout() {
        Cookies.remove('Authorization');
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

    }

    async handleEdit(article) {
        this.setState({id: article.id, title: article.title, body: article.body, article_type: article.article_type});
        this.setState((previousState) => ({isEditMode: !previousState.isEditMode}));
    }

    async handleEditOrPost(e, id, title, body, article_type) {
        if (this.state.isEditMode) {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'Application/Json',
                    'X-CSRFToken': Cookies.get('csrftoken')
                },
                body: JSON.stringify({
                    author: this.state.user,
                    title: title,
                    body: body,
                })

            };
            const response = await fetch(`/api/v1/articles/edit/${id}/`, options);
            const data = await response.json();

            this.setState({
                id,
                title: this.state.title,
                author: this.state.author,
                body: this.state.body,
                article_type: this.state.article_type
            });
            this.setState({isEditMode: false});
        } else {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/Json',
                    'Authorization': Cookies.get('Authorization'),
                },
                body: {
                    body: JSON.stringify({
                        author: this.state.user,
                        title: title,
                        body: body,
                        article_type: article_type
                    })
                }
            };

            const response = await fetch(`/api/v1/articles/`, options);
            const data = await response.json();
            console.log(data);
            this.setState({id,
                                 title: data.title,
                                 body: data.body,
                                 author: this.state.user,
                                 article_type: data.article_type});
        }
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const articles = this.state.articles?.map(article => <section key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.author}</p>
            <button className="btn" onClick={() => this.handleEdit(article)}>Edit</button>
            <button className="btn" onClick={() => this.handleDelete(article.id)}>Delete</button>
        </section>);
        if (this.props.isLoggedIn) {
            return <>
                <h1>{this.state.user}</h1>
                {/*<img alt="jpb3"/>*/}
                {articles}
                <form action=""
                      onSubmit={(e) => this.handleEditOrPost(e, this.state.id,
                          this.state.title,
                          this.state.body,
                          this.state.author,
                          this.state.article_type)}>
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
                        name="body"
                        id="body"/>
                    <select>
                        <option name="astronomy"
                                value={this.state.article_type}>Astronomy
                        </option>
                        <option name="cosmology"
                                value={this.state.article_type}>Cosmology
                        </option>
                        <option name="exoplanets"
                                value={this.state.article_type}>Exoplanets
                        </option>
                        <option name="editorial"
                                value={this.state.article_type}>Editorial
                        </option>
                    </select>
                    {
                        !this.state.isEditMode
                            ?
                            <button className="form-btn" type="submit">Submit an Article</button>
                            :
                            <button className="form-btn" type="submit">Edit your article</button>
                    }
                </form>
                {/*The image uploader.*/}
                <form action="" onSubmit={this.handleSubmit}>
                    <input className="file" type="file" name="profile_picture" onChange={this.handleImage}/>
                    {
                        this.state.profile_picture && <img src={this.state.preview} alt="preview"/>
                    }
                </form>
                <button onClick={() => this.handleLogout()} className="form-btn">Logout</button>
            </>;
        } else {
            return <div>Please Log in</div>;
        }
    }
}

export default Profile;