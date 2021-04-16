import {Component} from 'react';

class Ad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ad: [],
        };
    }

    async componentDidMount() {
        const response = await fetch('/api/v1/ads/random/');
        const data = await response.json();
        this.setState({ad: data});
    }

    render() {
        const ads = this.state.ad.map(ad => <>
            <h3><a href="/">{ad.title}</a></h3>
            <img src={ad.image} alt=""/>
            <p>This is a fake ad</p>
        </>);
        return (
            <div className="ad item">
                {ads}
            </div>
        );
    }
}

export default Ad;