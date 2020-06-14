import React from 'react';

import styles from './Player.module.css';

const Player = ({ position }) => {
    return (
        <div className={styles['player-container']} id={styles[`${position}`]}>
            <div className={styles['player-top-row']}>
                <div className={styles['profile-container']}>
                    <div className={styles['name']}>
                    </div>
                    <div className={styles['picture']}>
                    </div>
                </div>
                <div className={styles['hand-container']}>
                </div>
            </div>
            <div className={styles['player-bottom-row']}>
                <div className={styles['bet-container']}>
                </div>
            </div>
        </div>
    )
}

export default Player;
