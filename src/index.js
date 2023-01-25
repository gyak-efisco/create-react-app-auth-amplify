import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
        domain="thi.auth0.com"
        clientId="C3y28E0Yd8DdZYbVBo9HySPcvfACxp9D"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App/>
    </Auth0Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
