import React from 'react';
import axios from 'axios';

export default class OpenApi extends React.Component {
    state = {
        results: []
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://api.openapi.ro/api/companies/13548146',
            headers: {
                'X-Api-Key': 's7jB75sZzXkUCeFxv9Mx3G-macoXzWSzeyha3hAxxJ1cfxeX1A'
            }
        })
            .then(res => {
                const results = res.data;
                console.log({res, results});
                this.setState({ results })
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

