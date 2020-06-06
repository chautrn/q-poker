import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Board from './Board';
import Chat from './Chat';

import styles from './Game.module.css';

const Game = () => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let roomNumber = params.get('room');

    return (
        <div className='wrapper'>
            <div className='content-wrap'>
                <Container fluid>
                    <Row className={styles['main-row']}>
                        <Col xs={9} className={styles['board-col']}>
                            <Board roomNumber={roomNumber}/>
                        </Col>
                        <Col xs={3} className={styles['chat-col']}>
                            <Chat />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Game;
