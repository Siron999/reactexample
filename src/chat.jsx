import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ChatComponent() {
    const [message, setMessage] = useState({
        username: '',
        message: ''
    });
    const [receivedMessage, setReceivedMessage] = useState('');
    const websocketRef = useRef(null);
    const { username } = useParams();
    const socket = new WebSocket(`ws://localhost:8000/ws/chat/${username}/`)

    // Connection opened
    socket.addEventListener("open", event => {
        console.log("Connected to web socket for user: " + username);
    });

    // Listen for messages
    socket.addEventListener("message", event => {
        setReceivedMessage(JSON.parse(event.data)?.message);
    });

    const sendMessage = () => {
        console.log(message)
        let sendToSocket = new WebSocket(`ws://localhost:8000/ws/chat/${message.username}/`);
        sendToSocket.addEventListener("open", event => {
            console.log("Sending to user: " + username);
            sendToSocket.send(JSON.stringify(message));
        });
    }

    return (
        <div>
            <h1>Chat Room</h1>
            <input onChange={(e) => setMessage({ ...message, message: e.target.value })} type='text' /><br />
            <input onChange={(e) => setMessage({ ...message, username: e.target.value })} type='text' />
            <br />
            <button onClick={sendMessage}>Send</button>
            <br />
            {receivedMessage}
        </div>
    );
}

export default ChatComponent;