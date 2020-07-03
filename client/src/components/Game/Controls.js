import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import styles from './Controls.module.css';

const Controls = () => {
	const [raising, setRaising] = useState(false);

	return (
		<div id={styles['control-wrap']}>
			<div id={styles['button-wrap']}>
				<span 
					className={styles['button']}
					style={{
						background: "#C75138",
						borderBottom: "solid 4px #9C402C"
					}}> FOLD </span>
				<span className={styles['button']}> CHECK </span>
				<div id={styles['raise-wrap']}>
					<span 
						className={styles['button']}
						style={{
							background: "#E3D900",
							borderBottom: "solid 4px #9C9500",
							marginRight: 0
						}}
						onClick={() => setRaising(!raising)}>
						{raising ? 'CONFIRM' : 'RAISE'}
					</span>
					<div id={styles['raise-slider-wrap']}>
					</div>
				</div>
			</div>
		</div>
		);
}

export default Controls;
