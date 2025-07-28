import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../assets/logo.png'; 

function Sidebar({ isOpen }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.profileSection}>
        <img
          src={logo} 
          alt="Univoid AI Logo"
          className={styles.profileImage}
        />
        <h2 className={styles.profileName}>Univoid AI</h2>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.button}>About</button>
        <button className={styles.button}>Admission</button>
        <button className={styles.button}>News</button>
      </div>
    </div>
  );
}

export default Sidebar;
