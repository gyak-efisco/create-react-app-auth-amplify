import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Auth} from "aws-amplify";

const Profile = () => {
    const {user, isAuthenticated, isLoading, getAccessTokenSilently, getIdTokenClaims} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        console.log(user, 'user')

        Promise.all([getAccessTokenSilently(), getIdTokenClaims()]).then(([idToken, claims]) => {
            console.log(idToken, 'idToken')
            console.log(claims.__raw, '__raw')
            console.log(claims, 'claims')

            Auth.federatedSignIn(
                'thi.auth0.com', // The Auth0 Domain,
                {
                    token: claims.__raw,
                    // token: idToken,
                    expires_at: claims.exp * 1000
                },
                user
            ).then(cred => {
                console.log(cred, 'AWS CREDS');
            });
        })

    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;