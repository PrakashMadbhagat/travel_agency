// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => navigate('/admin/')}>All Recent Bookings</li>
        <li onClick={() => navigate('/admin/Hotel')}>Hotel Bookings</li>
        <li onClick={() => navigate('/admin/Bus')}>Bus Bookings</li>
        <li onClick={() => navigate('/admin/Car')}>Car Bookings</li>
        <li onClick={() => navigate('/admin/Profile')}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
