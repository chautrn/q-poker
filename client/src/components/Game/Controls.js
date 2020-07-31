import React, { useState } from 'react';
import { Slider, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import styles from './Controls.module.css';

const StyledSlider = withStyles({
	rail: { 
		backgroundColor: '#14CC60',
		height: '10px',
		borderRadius: '50px'
	},
	track: {
		backgroundColor: '#14CC60',
		height: '10px',
		borderRadius: '50px'
	},
	thumb: {
		height: 20,
		width: 20,
		backgroundColor: '#14CC60',
		'&:hover, &:$active': {
			boxShadow: '0 0 0 10px rgba(20, 204, 96, 0.2)'
		},
	},
	marginRight: '100px'
})(Slider);

const StyledTooltip = withStyles({
	tooltip: {
		fontSize: '1.5vw',
		background: '#313131'
	}
})(Tooltip);

const ValueLabelComponent = (props) => { 
	const { children, open, value } = props;

	return (
		<StyledTooltip open={open} enterTouchDelay={0} placement='top' title={'$' + value.toLocaleString()}>
			{children}
		</StyledTooltip>
	);
}

const Controls = () => {
	const [raising, setRaising] = useState(false);

	return (
		<div id={styles['control-wrap']}>
			{raising 
				? 
					<div id={styles['raise-wrap']}>
						<StyledSlider 
							defaultValue={0}
							step={215}
							min={0}
							max={3000}
							valueLabelDisplay='on'
							ValueLabelComponent={ValueLabelComponent}
							disabled={false}
							style={{marginRight: '4%'}}
						/>
						<span 
							className={styles['button']}
							style={{marginRight: '3%'}}
							onClick={() => {setRaising(false)}}>CANCEL</span>
						<span className={styles['button']}>CONFIRM</span>
					</div>
					:
					<div id={styles['button-wrap']}>
						<span className={styles['button']}> 
							FOLD
						</span>
						<span className={styles['button']}> CHECK </span>
						<span 
							className={styles['button']}
							onClick={() => setRaising(true)}>
							RAISE
						</span>
					</div>
			}
		</div>
	);
}

export default Controls;
