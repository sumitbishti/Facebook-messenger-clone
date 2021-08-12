import React, { useEffect, useState } from 'react'
import db from './firebase';
import firebase from 'firebase';
import ChatRoom from './ChatRoom';

import InputArea from './InputArea';
import Message from './Message';
import FlipMove from 'react-flip-move';

function App() {
  const [message, setMessage] = useState({ username: '', text: '' });
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      text: message.text,
      username: message.username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMessage({ ...message, text: '' })
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

  useEffect(() => {
    const name = prompt('Please enter your username: ')
    setMessage({ ...message, username: name });
  }, [])

  return (
    <section >

      <div className='chat-header'>
        <h2>Lame-Messenger</h2>
      </div>

      <div className='App'>
        <div className='chat-footer'>
          <InputArea handleSubmit={handleSubmit} message={message} setMessage={setMessage} />
        </div>

        <div className='chat-messages'>
          <FlipMove>
            {messages.map(({ id, data }) => {
              // const { id, data } = msgObj;
              return (
                <Message
                  key={id}
                  message={data}
                  myUsername={message.username}
                />
              )
            })}
          </FlipMove>
        </div>
      </div>

    </section>
  )
}

export default App
