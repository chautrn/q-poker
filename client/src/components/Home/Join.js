import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Join = ({joinRoom, setJoinScreen }) => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    return  (
                <Container className='login-container p-5'>
                    <Row className='login-element'>
                        <input
                            className='login-input'
                            spellCheck='false'
                            placeholder='NAME'
                            onChange={e => setName(e.target.value)}
                        />
                    </Row>
                    <Row className='login-element mt-5'>
                        <input
                            className='login-input'
                            spellCheck='false'
                            placeholder='ROOM ID'
                            onChange={e => setRoomNumber(e.target.value)}
                        />
                    </Row>
                    <Row className='login-element mt-5'>
                        <Col xs={6} className='login-button-container justify-content-start'>
                            <Link onClick={e => (!name || !roomNumber) ? e.preventDefault() : joinRoom(name, roomNumber)} to={`/game?room=${roomNumber}`}>
                                <span className='square_btn'>JOIN</span>
                            </Link>
                        </Col>
                        <Col xs={6} className='login-button-container justify-content-end'>
                            <span
                                className='square_btn'
                                onClick={() => {
                                    setJoinScreen(false);
                                }}>CREATE</span> {/*TODO: format this better jfc*/}
                        </Col>
                    </Row>
                </Container>
    )
}

export default Join;