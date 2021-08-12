import React, { useEffect, useState } from 'react'
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;

        db.collection('messages').add({
            text: formValue,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            username: displayName,
        })
        setFormValue('');
    }

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
        <section className='App'>

            <header >
                <h3>Messenger <span>💬</span></h3>
                <SignOut />
            </header>

            <section >
                {user ? <ChatRoom
                    handleSubmit={handleSubmit}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    messages={messages}
                    auth={auth}
                /> : <SignIn auth={auth} />}
            </section>

        </section>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default App
