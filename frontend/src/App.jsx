import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.appContainer}>
      {isSidebarOpen && <div className={styles.backdrop} onClick={toggleSidebar}></div>}
      <div className={styles.mainLayout}>
        <Sidebar isOpen={isSidebarOpen} />
        <ChatWindow toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default App;
