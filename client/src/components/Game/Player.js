import React from 'react';

import styles from './Player.module.css';

const Player = ({ position }) => {
	const balance = 1000; // for ui testing purposes, to be removed

	return (
		<div className={styles['player-container']} id={styles[`${position}`]}>
			<div className={styles['name-container']}>
				TheAwesomeChau	
			</div>
			<div className={styles['card-container']}>
				<img src='/images/QH.png' />
				<img src='/images/KS.png' />
			</div>
			<div className={styles['balance-container']}>
				{'$' + balance.toLocaleString()}
			</div>
		</div>
	);
}

export default Player;
