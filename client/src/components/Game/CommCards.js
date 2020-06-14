import React from 'react';

import styles from './CommCards.module.css';

const CommCards = () => {
    return (
        <div className={styles['container']}>
            <img src='/images/10D.png' />
            <img src='/images/JS.png' />
            <img src='/images/7H.png' />
            <img src='/images/4D.png' />
            <img src='/images/KH.png' />
        </div>
    );
}

export default CommCards;
