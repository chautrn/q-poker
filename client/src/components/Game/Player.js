import React, { useState } from 'react';

import styles from './Player.module.css';

const Blind = ({ sb, bb, playerPosition }) => {
	if (playerPosition == sb) {
		return (
			<div className={styles['blind-container']}>
				SB
			</div>
		)
	}
	else if (playerPosition == bb) {
		return (
			<div className={styles['blind-container']}>
				BB
			</div>
		)
	}
	else {
		return null;
	}
}

const Player = ({ position }) => {
	const balance = 1000; // for ui testing purposes, to be removed
	const bet = 250;

	const [smallBlind, setSmallBlind] = useState(2); // again, for testing purposes
	const [bigBlind, setBigBlind] = useState(3);

	return (
		<div className={styles['player-container']} id={styles[`${position}`]}>
			<div className={styles['name-container']}>
				PlaceholderName	
			</div>
			<div className={styles['card-container']}>
				<img src='/images/QH.png' />
				<img src='/images/KS.png' />
			</div>
			<div className={styles['bottom-wrapper']}>
				<Blind sb={smallBlind} bb={bigBlind} playerPosition={position} />
				<div className={styles['balance-container']}>
					{'$' + balance.toLocaleString()}
				</div>
			</div>
			<div className={styles['bet-container']}>
				<img className={styles['bet-icon']} src='/images/stack5.png' />
				<div className={styles['bet-label']}>
					{'$' + bet.toLocaleString()}	
				</div>
			</div>
		</div>
	);
}

export default Player;
