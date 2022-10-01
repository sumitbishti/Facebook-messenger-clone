import React, { useEffect, useRef, useState } from 'react'
import db from './firebase';
import firebase from 'firebase';
import 'firebase/auth';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

function App() {
    const [formValue, setFormValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [user] = useAuthState(auth);
    // const dummy = useRef();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { uid, photoURL, displayName } = auth.currentUser;
    //     db.collection('messages').add({
    //         text: formValue,
    //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         uid,
    //         photoURL,
    //         username: displayName,
    //     })
    //     setFormValue('');
    //     dummy.current.scrollIntoView({ behavior: 'smooth' });
    // }

    useEffect(() => {
        db
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data(),
                    }
                }))
            })
    }, [])

    return (
        <div className='App'>
            <header >
                <h3>Messenger <span>💬</span></h3>
                <SignOut />
            </header>
            <div>
                {user ? <ChatRoom
                    formValue={formValue}
                    setFormValue={setFormValue}
                    messages={messages}
                    auth={auth}
                /> : <SignIn auth={auth} />}
            </div>
        </div>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button className='sign-out' onClick={() => auth.signOut()}>Sign Out</button>
    )
}
export default App
