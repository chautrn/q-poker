import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import './Game.css';

const Game = () => {
    return (
        <div className='wrapper'>
            <div className='content-wrap'>
               <Container fluid>
                   <Row className='title-row'>
                        <img className='title-image' src='/title.png' alt='title.png' />
                        <span className='title-text'>POKER</span>
                   </Row>
                   <Row className='board-row'>
                   </Row>
               </Container> 
            </div>
            <Footer />
        </div>
    );
}

export default Game;
