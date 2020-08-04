import React, { useState } from 'react';
import styles from './Pot.module.css';

const Pot = () => {
	const [pot, setPot] = useState(1000);

	return (
		<div id={styles['pot-container']}>
			{'$' + pot.toLocaleString()}
		</div>
	);
}

export default Pot;
