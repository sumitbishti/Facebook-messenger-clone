import React, { useRef } from 'react';
import InputArea from './InputArea';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';

const ChatRoom = ({ formValue, setFormValue, messages, auth }) => {
    const dummy = useRef();

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
        // if(!dummy.current) return;
        // dummy.current.scrollIntoView(false);
        // window.scrollTo(0, 30);
    }
    return (
        <main>
            {messages && messages.map(({ id, data }) => {
                return (
                    <Message
                        key={id}
                        message={data}
                        auth={auth}
                    />
                )
            })}
            <span ref={dummy}></span>
            <div>
                <InputArea handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue} />
            </div>
        </main>
    )
}

export default ChatRoom;