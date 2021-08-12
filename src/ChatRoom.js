import React from 'react';
import InputArea from './InputArea';
import Message from './Message';
import FlipMove from 'react-flip-move';

const ChatRoom = ({ handleSubmit, formValue, setFormValue, messages, auth }) => {

    return (
        <div className='chatRoom'>

            <div className='input-area'>
                <InputArea handleSubmit={handleSubmit} formValue={formValue} setFormValue={setFormValue} />
            </div>

            <div className='chat-messages'>
                <FlipMove>
                    {messages.map(({ id, data }) => {
                        // const { id, data } = msgObj;
                        return (
                            <Message
                                key={id}
                                message={data}
                                auth={auth}
                            />
                        )
                    })}
                </FlipMove>
            </div>

        </div>
    )
}

export default ChatRoom;