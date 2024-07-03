/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import profileIcon from './assets/images/proficon.webp'
import Chat from './Components/Chat'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Call from './Components/Call';

function App() {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef('');
  const socket = new WebSocket('ws://localhost:8080/chat');
  const [sessionID, setSessionID] = useState('');

  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket connected');
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      setMessages(prevMessages => [...prevMessages, message]);
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
      // You can add logic here to reconnect if needed
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

  }, []);

  const sendMessage = () => {
    console.log('Sending message...', messageRef.current.value)
    const message = {
      username: 'john_doe',
      content: messageRef.current.value,
      timestamp: new Date().toISOString(),
    };
    socket.send(JSON.stringify(message), sessionID);
    messageRef.current.value = '';
  };

  return (
    <BrowserRouter>
      <div className="screen_">
        {/* Status bar */}
        <div className="status-bar">
          <div>
            <strong>9:41</strong>
          </div>
          <div>
            <ion-icon name="cellular"></ion-icon>
            <ion-icon name="wifi"></ion-icon>
            <ion-icon name="battery-full-outline"></ion-icon>
          </div>
        </div>
        {/* Header */}
        <Routes>
          <Route path="/chat" element={
            <>
              <div className="header">
                <div className="central-header">
                  <Link to="/login">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </Link>
                  <img src={profileIcon} />
                  <div className="name">
                    <strong>Helena Hills</strong>
                    <span>Active 20m ago</span>
                  </div>
                </div>
                <div>
                  <Link to="/call">
                    <ion-icon name="call-outline"></ion-icon>
                  </Link>
                  <ion-icon name="videocam-outline"></ion-icon>
                </div>
              </div>
              {/* CHAT COMPONENT */}
              <Chat messages={messages} />
              {/* BOTOM BAR COMPONENT */}
              <div className="botom-bar">
                <div>
                  <div className="botom-input">
                    <input
                      type="text"
                      name="botom-input"
                      id="botom-input"
                      placeholder="Message..."
                      ref={messageRef}
                    />
                    <div>
                      <ion-icon name="mic-outline"></ion-icon>
                      <ion-icon name="happy-outline"></ion-icon>
                      <ion-icon name="image-outline"></ion-icon>
                    </div>
                  </div>
                  <div className="send-buttom" onClick={() => sendMessage()}>
                    <ion-icon name="send"></ion-icon>
                  </div>
                </div>
                {/* <div className="botom-bar-2">
                  <hr />
                </div> */}
              </div>
            </>
          }
          />
          <Route path="/login" element={
            <Login />
          } />
          <Route path="/call" element={
            <Call />
          } />
        </Routes>
      </div>
      <div className="botom-bar-2">
        <hr />
      </div>
    </BrowserRouter>
  )
}

export default App
