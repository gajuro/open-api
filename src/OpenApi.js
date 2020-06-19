import React from 'react';
import axios from 'axios';

export default class OpenApi extends React.Component {
    state = {
        result: []
    };

    componentDidMount() {
        axios({
            method: 'get',
            url: `https://api.openapi.ro/api/companies/${'13548146'}`,
            headers: {
                'X-Api-Key': 's7jB75sZzXkUCeFxv9Mx3G-macoXzWSzeyha3hAxxJ1cfxeX1A'
            }
        })
        .then(res => {
            const result = res.data;
            console.log({res, result});
            this.setState({ result })
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    
    render() {
        return (
            <ul>
                {this.state.result.denumire}
            </ul>
        )
    }
}

