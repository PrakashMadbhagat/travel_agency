import React, { useState } from 'react';
import styles from '../../css/Header.module.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [userImage, SetUserImage] = useState('https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg')

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className={styles.header}>
      <h5 className={styles.welcome}>Welcome, Admin</h5>

      <div className={styles.profileContainer}>
        <img
          src={userImage}
          alt="Profile"
          className={styles.profilePic}
          onClick={toggleDropdown}
        />

        {showDropdown && (
          <div className={styles.dropdown}>
            <p><strong>Name:</strong> Admin</p>
            <p><strong>Email:</strong> admin@example.com</p>
            <p><strong>Role:</strong> Super Admin</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
