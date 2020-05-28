import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import styles from './Game.module.css';

const Game = () => {
    return (
        <div className='wrapper'>
            <div className='content-wrap'>
                <Container fluid>
                    <Row className='board-row'>
                        <fieldset>
                            <legend> ROOM
                        </fieldset>
                        </Row>
                    </Container> 
                </div>
                <Footer />
            </div>
        );
    }

    export default Game;
