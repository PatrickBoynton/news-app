import { Component } from 'react'

class Profile extends Component {

    render() {
        return <>
            <form action="" onSubmit={this.props.handleSubmit}>
                <input type="file" name="profile_picture" onChange={this.props.handleImage}/>
                {
                    this.props.profile_picture && <img src={this.props.preview} alt="preview"/>
                }
                <button type="submit">Save</button>
            </form>
        </>
    }
}

export default Profile