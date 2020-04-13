import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../Slider/Slider';

import { Container, Row, Col, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Create = ({ createRoom, deleteRoom, createGame, setJoinScreen }) => {
    const [roomNumber, setRoomNumber] = useState('');

    // Game options
    const [startingChips, setStartingChips] = useState('');
    const [timeLimit, setTimeLimit] = useState('');
    const [smallBlind, setSmallBlind] = useState('');
    const [punishment, setPunishment] = useState('');

    useEffect(() => {setRoomNumber(createRoom())}, []);

    return (
                <Container className='container-fluid login-container create  pt-5 pb-5'>
                    <Row className='login-element'>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='login-input smaller-font stacked-margin'
                                    spellCheck='false'
                                    placeholder='STARTING CHIPS'
                                    onChange={(e) => setStartingChips(e.target.value)}
                                />
                            </Row>
                        </Col>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='login-input smaller-font stacked-margin'
                                    spellCheck='false'
                                    placeholder='TIME LIMIT (SECONDS)'
                                    onChange={(e) => setTimeLimit(e.target.value)}
                                />
                            </Row>
                        </Col>
                        <Col className='input-col' xl={4}>
                            <Row className='input-row'>
                                <input
                                    className='login-input smaller-font'
                                    spellCheck='false'
                                    placeholder='SMALL BLIND AMOUNT'
                                    onChange={(e) => setSmallBlind(e.target.value)}
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row className='login-element justify-content-center mt-5'>
                        <Slider text={'PUNISHMENT MODE'} onChange={(e) => { setPunishment(e.target.checked) }} />
                    </Row>
                    <Row className='login-element mt-5'>
                        <ButtonToolbar className='login-button-container'>
                            <ButtonGroup id='back-container'>
                                <span
                                    className='square_btn'
                                    onClick={() => {
                                        deleteRoom();
                                        setJoinScreen(true);
                                    }}>BACK</span>
                            </ButtonGroup>
                            <ButtonGroup id='create-container'>
                                <Link onClick={(e) => (!startingChips || !timeLimit || !smallBlind) ? e.preventDefault() : createGame(startingChips, timeLimit, smallBlind, punishment, roomNumber)}
                                    to={`/game?room=${roomNumber}`}
                                >
                                    <span className='square_btn'>CREATE</span>
                                </Link>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Row>
                </Container>
    )
}

export default Create;