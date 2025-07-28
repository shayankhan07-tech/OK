import React, { useState, useRef } from 'react';
import styles from './ChatInput.module.css';

function ChatInput({ onSendMessage, onFileSelect }) {
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleFileButtonClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileSelect(file);
    e.target.value = null;
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept=".pdf,.doc,.docx,.png,.jpg"
        />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question or attach a file..."
          className={styles.inputField}
        />
        <button type="button" onClick={handleFileButtonClick} className={styles.iconButton} aria-label="Attach file">
          📎
        </button>
        <button type="submit" className={styles.iconButton} aria-label="Send message">
          ➤
        </button>
      </form>
    </div>
  );
}

export default ChatInput;