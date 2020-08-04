import React from 'react';

import boardStyles from './Board.module.css';

import Player from './Player';
import CommCards from './CommCards';
import Pot from './Pot';

const Board = () => {
    return (
        <div className={boardStyles['board-border-1']}>
            <Player position={0} />
            <Player position={1} />
            <Player position={2} />
            <Player position={3} />
            <Player position={4} />
            <CommCards />
            <div className={boardStyles['board-border-2']}>
            </div>
        </div>
    )
}

export default Board;
