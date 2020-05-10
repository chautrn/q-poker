import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css';

import Footer from '../Footer/Footer';
import GameMaker from './GameMaker';

const Home = ({ socket }) => {

    useEffect(() => {
        socket.emit('deleteRoom'); // change to delete all instances of user
    });

    return (
        <div className='wrapper'>
            <div className='content-wrap'>
                <Container fluid>
                    <Row className={styles['title-row']}>
                        <img className={styles['title-image']} src='/title.png' alt='POKER-TITLE'/> <span className={styles['title-text']}>POKER</span>
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
