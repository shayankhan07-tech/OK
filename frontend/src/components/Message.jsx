import React from 'react';
import styles from './Message.module.css';

function Message({ message }) {
  const isUser = message.sender === 'user';
  return (
    <div className={`${styles.messageContainer} ${isUser ? styles.userContainer : styles.aiContainer}`}>
      <div className={`${styles.bubble} ${isUser ? styles.userBubble : styles.aiBubble}`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
