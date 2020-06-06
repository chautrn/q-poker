import React from 'react';

import styles from './Game.module.css';

const Board = ({ roomNumber }) => {
    return (
        <fieldset className={styles['fieldset']}>
            <legend className={styles['legend']}> 
                ROOM #{roomNumber} 
            </legend>
        </fieldset>
    )
}

export default Board;
