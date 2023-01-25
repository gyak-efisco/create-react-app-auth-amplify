import React, { Component } from 'react';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import LoginButton from "./LoginButton";
import Profile from "./Profile";
import LogoutButton from "./LogoutButton";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<AmplifySignOut />*/}

        <LoginButton />
          <LogoutButton />
        <Profile />
      </div>
    );
  }
}

// export default withAuthenticator(App);
export default App;

