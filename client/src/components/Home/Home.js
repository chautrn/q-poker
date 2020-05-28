import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css';

import Footer from '../Footer/Footer';
import GameMaker from './GameMaker';

const Home = ({ socket }) => {
    return (
        <div className='wrapper'>
            <div className='content-wrap'>
                <Container fluid>
                    <Row className={styles['title-row']}>
                        <span className={styles['title-text']}> Q-P♠KER </span>
                    </Row>
                    <Row className={styles['main-row']}>
                        <GameMaker socket={socket} />
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
