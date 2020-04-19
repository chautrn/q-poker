// TODO: apart join and create screen to two components
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from './Lobby.module.css';

import LobbyJoin from './LobbyJoin';
import LobbyCreate from './LobbyCreate';

const Lobby = ({ socket }) => {
    const [joinScreen, setJoinScreen] = useState(true);

    return (
        <Container fluid className={styles['slideAndFadeIn']} key={joinScreen}>
            {joinScreen ?
                <LobbyJoin {...{ socket, setJoinScreen }}/>
                :
                <LobbyCreate {...{ socket, setJoinScreen }} />
            }
        </Container>
    )
}

export default Lobby;