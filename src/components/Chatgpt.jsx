import React, { useState } from "react";
import "../styles/chatgpt.css";

const Chatgpt = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I assist you today?", sender: "bot" },
    { id: 2, text: "What is React?", sender: "user" },
  ]);

  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputMessage, sender: "user" },
      ]);
      setInputMessage("");
      // Simulate bot response
      setTimeout(() => {
        setMessages([
          ...messages,
          { id: messages.length + 1, text: inputMessage, sender: "user" },
          {
            id: messages.length + 2,
            text: "React is a JavaScript library for building user interfaces.",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h3>History</h3>
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text.substring(0, 20)}...</li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatgpt;
