import React, { forwardRef } from 'react'

const Message = forwardRef(({ message, auth }, ref) => {
    const { text, username, photoURL, uid } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>
        </div>
    )
})

export default Message
