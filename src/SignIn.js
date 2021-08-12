import firebase from "firebase";
import React from "react";

const SignIn = ({ auth }) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <div className='sign-in'>
            <button className='sign-in-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;
