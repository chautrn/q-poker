import React from 'react';

import styles from './Player.module.css';

const Player = ({ position }) => {
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
				$1000
			</div>
		</div>
	);
}

export default Player;
