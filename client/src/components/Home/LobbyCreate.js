import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Slider from '../Slider/Slider';

import { Container, Row, Col, ButtonToolbar } from 'react-bootstrap';

const LobbyCreate = ({ socket, setJoinScreen }) => {
    const [redirect, setRedirect] = useState(null);

    const createRoom = async (name, startingChips, timeLimit, punishment) => {
        socket.emit('createRoom', { name, startingChips, timeLimit, punishment });

        const getRoomNumber = new Promise((res, rej) => {
            socket.once('currentRoom', (roomNumber) => {
                res(roomNumber);
            });
        });

        const roomNumber = await getRoomNumber;
        setRedirect(`/game?room=${roomNumber}`);
    }

    // Game options
    const [name, setName] = useState('');
    const [startingChips, setStartingChips] = useState('');
    const [timeLimit, setTimeLimit] = useState('');
    const [punishment, setPunishment] = useState('');

    return (
        <div>
            {redirect ? <Redirect to={redirect} /> :
                <Container fluid className='lobby-container create-container pt-5 pb-5'>
                    <Row className='lobby-element'>
                        <Col className='mb-5' align='center' xl={4}>
                            <input
                                className='input--create'
                                spellCheck='false'
                                placeholder='NAME'
                                onChange={e => setName(e.target.value)}
                            />
                        </Col>
                        <Col className='mb-5' align='center' xl={4}>
                            <input
                                className='input--create'
                                spellCheck='false'
                                placeholder='STARTING CHIPS'
                                onChange={e => setStartingChips(e.target.value)}
                            />
                        </Col>
                        <Col className='mb-5' align='center' xl={4}>
                            <input
                                className='input--create'
                                spellCheck='false'
                                placeholder='TIME LIMIT (SECONDS)'
                                onChange={e => setTimeLimit(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className='lobby-element'>
                        <Slider text={'PUNISHMENT MODE'} onChange={(e) => { setPunishment(e.target.checked) }} />
                    </Row>
                    <Row className='lobby-element mt-5'>
                        <ButtonToolbar className='lobby-button-container'>
                            <span
                                className='lobby-button mr-4'
                                onClick={() => setJoinScreen(true)}>BACK</span>
                            <span className='lobby-button'
                                onClick={e => (!name || !startingChips || !timeLimit) ? e.preventDefault() : createRoom(name, startingChips, timeLimit, punishment)}>CREATE</span>
                        </ButtonToolbar>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default LobbyCreate;