// TODO: apart join and create screen to two components
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from './GameMaker.module.css';

import GameMakerJoin from './GameMakerJoin';
import GameMakerCreate from './GameMakerCreate';

const GameMaker = ({ socket }) => {
    const [joinScreen, setJoinScreen] = useState(true);

    return (
        <Container fluid className={styles['slideAndFadeIn']} key={joinScreen}>
            {joinScreen ?
                <GameMakerJoin {...{ socket, setJoinScreen }}/>
                :
                <GameMakerCreate {...{ socket, setJoinScreen }} />
            }
        </Container>
    )
}

export default GameMaker;
