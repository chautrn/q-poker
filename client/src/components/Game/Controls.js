import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import styles from './Controls.module.css';

const StyledSlider = withStyles({
	rail: { 
		backgroundColor: '#14CC60',
		height: '10px',
	},
	track: {
		backgroundColor: '#14CC60',
		height: '10px',
	},
	thumb: {
		height: 20,
		width: 20,
		backgroundColor: '#14CC60',
		'&:hover, &:$active': {
			boxShadow: '0 0 0 10px rgba(20, 204, 96, 0.2)'
		},
	},
})(Slider);

const Controls = () => {
	const [raising, setRaising] = useState(false);

	return (
		<div id={styles['control-wrap']}>
			{raising 
				? 
					<div id={styles['slider-wrap']}>
						<StyledSlider 
							defaultValue={0}
							step={215}
							min={0}
							max={3000}
							disabled={false}
						/>
					</div>
					:
					<div id={styles['button-wrap']}>
						<span 
							className={styles['button']}
							style={{
								background: "#C75138",
								borderBottom: "solid 4px #9C402C"}}> 
							FOLD
						</span>
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
								RAISE
							</span>
							<div id={styles['raise-slider-wrap']}>
							</div>
						</div>
					</div>
			}
		</div>
	);
}

export default Controls;
