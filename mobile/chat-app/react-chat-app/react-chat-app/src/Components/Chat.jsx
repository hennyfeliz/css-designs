/* eslint-disable react/prop-types */
import '../Styles/Chat.css';
import React, { useEffect, useRef } from 'react';

const Chat = ({ messages }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // messages.sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const usernameFormat = (username) => {
    return username = username.replace('_', ' ');
  }

  let lastDate = null;

  return (
    <div className="chat-container" ref={chatContainerRef}>
      {messages.map((msg, index) => {
        const currentDate = formatDate(msg.timestamp);
        const showDate = lastDate !== currentDate;
        lastDate = currentDate;

        return (
          <React.Fragment key={index}>
            {showDate && <div className="date-separator">{currentDate}</div>}
            <div className={`message ${msg.username}`}>
              <span className="text username">{usernameFormat(msg.username)}</span>
              <span className="text">{msg.content}</span>
              <span className="time">{formatTime(msg.timestamp)}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Chat