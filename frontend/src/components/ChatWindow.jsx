import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import styles from './ChatWindow.module.css';
import logo from '../assets/logo.png'; 

function ChatWindow({ toggleSidebar }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([{ id: 1, text: "Hello! How can I help you find your way around campus today?", sender: "ai" }]);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    const newUserMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = { id: Date.now() + 1, text: `This is a simulated AI response to "${text}".`, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleFileSelect = (file) => {
    const fileMessage = { id: Date.now(), text: `You have attached a file: ${file.name}`, sender: 'user' };
    setMessages(prev => [...prev, fileMessage]);
    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = { id: Date.now() + 1, text: `I've received the file "${file.name}". How can I help?`, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <button className={styles.menuButton} onClick={toggleSidebar}>&#9776;</button>
        <img src={logo} alt="Header Logo" className={styles.headerLogo} />
        <h2>Univoid AI</h2>
      </div>
      <div className={styles.messageArea}>
        {isLoading ? (
          <div className={styles.loadingSpinner}></div>
        ) : (
          <>
            {messages.map((msg) => <Message key={msg.id} message={msg} />)}
            {isTyping && (
              <div className={styles.typingIndicator}>
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      <ChatInput onSendMessage={handleSendMessage} onFileSelect={handleFileSelect} />
    </div>
  );
}

export default ChatWindow;
