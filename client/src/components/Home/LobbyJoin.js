import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, ButtonToolbar } from 'react-bootstrap';

const LobbyJoin = ({ setJoinScreen, socket }) => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const joinRoom = (name, room) => {
        socket.emit('joinRoom', { name, room });
    }

    return (
        <Container className='lobby-container p-5'>
            <Row className='lobby-element'>
                <input
                    className='input--join'
                    spellCheck='false'
                    placeholder='NAME'
                    onChange={e => setName(e.target.value)}
                />
            </Row>
            <Row className='lobby-element mt-5'>
                <input
                    className='input--join'
                    spellCheck='false'
                    placeholder='ROOM ID'
                    onChange={e => setRoomNumber(e.target.value)}
                />
            </Row>
            <Row className='lobby-element mt-5'>
                <ButtonToolbar className='lobby-button-container'>
                    <Link onClick={e => (!name || !roomNumber) ? e.preventDefault() : joinRoom(name, roomNumber)} to={`/game?room=${roomNumber}`}>
                        <span className='lobby-button mr-4'>JOIN</span>
                    </Link>
                    <span className='lobby-button' onClick={() => setJoinScreen(false)}>CREATE</span>
                </ButtonToolbar>
            </Row>
        </Container>
    )
}

export default LobbyJoin;