import React, { forwardRef } from 'react'

const Message = forwardRef(({ message, myUsername }, ref) => {
    const { text, username } = message;
    const isUser = myUsername === username ? true : false;
    return (
        <div ref={ref}>
            <div className={`message ${isUser && 'my-message'}`}>
                <h4>{!isUser && `${username || 'Unknown user'}:`} {text}</h4>
            </div>
        </div>
    )
})

export default Message
