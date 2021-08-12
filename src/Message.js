import React, { forwardRef } from 'react'

const Message = forwardRef(({ message, auth }, ref) => {
    const { text, username, photoURL, uid } = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div ref={ref} className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    )
})

export default Message
