import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootEl = document.getElementById('root')

let render = () => {
    ReactDOM.render(<App />, rootEl)
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render()

serviceWorker.unregister();
