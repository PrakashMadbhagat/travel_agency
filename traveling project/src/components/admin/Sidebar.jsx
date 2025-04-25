import React from 'react';
import styles from '../../css/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Analytics</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
