import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, ButtonToolbar } from 'react-bootstrap';

import styles from './GameMaker.module.css';

const GameMakerJoin = ({ setJoinScreen, socket }) => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const [redirect, setRedirect] = useState(null);

    // error handling
    const [error, setError] = useState('');
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        socket.on('errorStatus', (response) => {
            if (response === 'found') {
                setRedirect(`/game?room=${roomNumber}`);
            }
            else {
                setError(response);
            }
        })
    }, []);

    const handleJoin = (roomNumber, name) => {
        socket.emit('joinRoom', { roomNumber, name });
    }

    if (redirect) {
        return <Redirect to={redirect} />
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
            {error == 'roomNotFound' &&
            <h1 className={styles['error-message']}> Room not found! </h1>
            }
            <Row className={[styles['lobby-row'], styles['mt-50']].join(' ')}>
                <ButtonToolbar className={styles['lobby-button-container']}>
                    <span className={[styles['lobby-button'], styles['mr-30']].join(' ')} onClick={() => handleJoin(roomNumber, name)}>JOIN</span>
                    <span className={styles['lobby-button']} onClick={() => setJoinScreen(false)}>CREATE</span>
                </ButtonToolbar>
            </Row>
        </Container>
    )
}

export default GameMakerJoin;
