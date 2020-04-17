import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Slider from '../Slider/Slider';

import { Container, Row, Col, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = ({ socket, setJoinScreen }) => {
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
                <Container className='container-fluid login-container create-container pt-5 pb-5'>
                    <Row className='login-element'>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='create-input'
                                    spellCheck='false'
                                    placeholder='NAME'
                                    onChange={e => setName(e.target.value)}
                                />
                            </Row>
                        </Col>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='create-input'
                                    spellCheck='false'
                                    placeholder='STARTING CHIPS'
                                    onChange={e => setStartingChips(e.target.value)}
                                />
                            </Row>
                        </Col>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='create-input'
                                    spellCheck='false'
                                    placeholder='TIME LIMIT (SECONDS)'
                                    onChange={e => setTimeLimit(e.target.value)}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row className='login-element'>
                        <Slider text={'PUNISHMENT MODE'} onChange={(e) => { setPunishment(e.target.checked) }} />
                    </Row>
                    <Row className='login-element mt-5'>
                        <ButtonToolbar className='login-button-container'>
                                <span
                                    className='square_btn mr-4'
                                    onClick={() => setJoinScreen(true)}>BACK</span>
                                <span className='square_btn'
                                    onClick={e => (!name || !startingChips || !timeLimit) ? e.preventDefault() : createRoom(name, startingChips, timeLimit, punishment)}>CREATE</span>
                        </ButtonToolbar>
                    </Row>
                </Container>
            }
        </div>
    )
}

export default Create;