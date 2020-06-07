import React from 'react';

import styles from './Game.module.css';
import boardStyles from './Board.module.css';

const Board = ({ roomNumber }) => {
    return (
        <fieldset className={styles['fieldset']}>
            <legend className={styles['legend']}> 
                ROOM #{roomNumber} 
            </legend>
            <div className={boardStyles['board-border-1']}>
                <div className={boardStyles['board-border-2']}>
                </div>
            </div>
        </fieldset>
    )
}

export default Board;
