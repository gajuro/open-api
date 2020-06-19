import React from 'react';
import axios from 'axios';

export default class OpenApi extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://api.openapi.ro',
            key: 's7jB75sZzXkUCeFxv9Mx3G-macoXzWSzeyha3hAxxJ1cfxeX1A'
        })
            .then(res => {
                console.log(res);
                const results = res.json;
                this.setState({results})
            });
    }
    render() {
        return (
            <ul>
                {this.state.results.map(result =>
                    <li>{result}</li>)}
            </ul>
        )
    }
}

