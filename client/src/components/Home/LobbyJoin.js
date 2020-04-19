import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, ButtonToolbar } from 'react-bootstrap';

import styles from './Lobby.module.css';

const LobbyJoin = ({ setJoinScreen, socket }) => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const joinRoom = (name, room) => {
        socket.emit('joinRoom', { name, room });
    }

    return (
        <Container className={styles['join-container']}>
            <Row className={styles['lobby-row']}>
                <input
                    className={styles['input--join']}
                    spellCheck='false'
                    placeholder='NAME'
                    onChange={e => setName(e.target.value)}
                />
            </Row>
            <Row className={[styles['lobby-row'], styles['mt-50']].join(' ')}>
                <input
                    className={styles['input--join']}
                    spellCheck='false'
                    placeholder='ROOM ID'
                    onChange={e => setRoomNumber(e.target.value)}
                />
            </Row>
            <Row className={[styles['lobby-row'], styles['mt-50']].join(' ')}>
                <ButtonToolbar className={styles['lobby-button-container']}>
                    <Link className={styles['mr-30']} onClick={e => (!name || !roomNumber) ? e.preventDefault() : joinRoom(name, roomNumber)} to={`/game?room=${roomNumber}`}>
                        <span className={styles['lobby-button']}>JOIN</span>
                    </Link>
                    <span className={styles['lobby-button']} onClick={() => setJoinScreen(false)}>CREATE</span>
                </ButtonToolbar>
            </Row>
        </Container>
    )
}

export default LobbyJoin;