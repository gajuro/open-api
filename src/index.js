import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OpenApi from "./OpenApi";

class App extends Component {
    render() {
        return (
            <OpenApi />
        )
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


