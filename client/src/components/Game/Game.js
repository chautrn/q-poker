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
                <Container className={styles['game-container']} fluid>
                    <Row className={styles['main-row']}>
                        <div className={styles['board-col']}>
                            <fieldset className={styles['fieldset']}>
                                <legend className={styles['legend']}> 
                                    ROOM #{roomNumber} 
                                </legend>
                                <div className={styles['game-wrapper']}>
                                    <Board />
                                </div>
                            </fieldset>
                        </div>
                        <div className={styles['chat-col']}>
                            <fieldset className={styles['fieldset']}>
                                <legend className={styles['legend']}> 
                                    CHAT 
                                </legend>
                                <Chat />
                            </fieldset>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Game;
