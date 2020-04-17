import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Join = ({ setJoinScreen, socket}) => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const joinRoom = (name, room) => {
        socket.emit('joinRoom', { name, room });
    }

    return  (
                <Container className='login-container p-5'>
                    <Row className='login-element'>
                        <input
                            className='join-input'
                            spellCheck='false'
                            placeholder='NAME'
                            onChange={e => setName(e.target.value)}
                        />
                    </Row>
                    <Row className='login-element mt-5'>
                        <input
                            className='join-input'
                            spellCheck='false'
                            placeholder='ROOM ID'
                            onChange={e => setRoomNumber(e.target.value)}
                        />
                    </Row>
                    <Row className='login-element mt-5'>
                        <ButtonToolbar className='login-button-container'>
                            <Link onClick={e => (!name || !roomNumber) ? e.preventDefault() : joinRoom(name, roomNumber)} to={`/game?room=${roomNumber}`}>
                                <span className='square_btn mr-4'>JOIN</span>
                            </Link>
                            <span
                                className='square_btn'
                                onClick={() => {
                                    setJoinScreen(false);
                                }}>CREATE</span> {/*TODO: format this better jfc*/}
                        </ButtonToolbar>
                    </Row>
                </Container>
    )
}

export default Join;