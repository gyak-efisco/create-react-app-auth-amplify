import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Auth} from "aws-amplify";

const LogoutButton = () => {
    const {logout} = useAuth0();
    // logout({ logoutParams: { returnTo: window.location.origin } }

    return (
        <button onClick={async () => {
            await Auth.signOut();
            // logout({logoutParams: {returnTo: window.location.origin}});
            console.log('signed out');
        }
        }>
            Log Out
        </button>
    );
};

export default LogoutButton;