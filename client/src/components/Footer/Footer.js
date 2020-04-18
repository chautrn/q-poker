import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles['footer']}>
            <span className={styles['footer-text']}> © 2020 Chau Tran </span>
        </div>
    )
}

export default Footer;