import React from 'react';
import styles from './Header.module.css';
import Navbar from './Navbar';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* <h1>CMS Restaurant</h1> */}
            <Navbar />
        </header>
    );
};

export default Header;