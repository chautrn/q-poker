import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TransitionGroup } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../components.css';
import './Home.css';

import io from 'socket.io-client';

import LoginWindow from './LoginWindow';
import Footer from '../Footer/Footer';

const Home = () => {
    const [onRender, setOnRender] = useState(true);

    const ENDPOINT = 'localhost:5000';

    const socket = io(ENDPOINT);

    return (
        <div>
            <div className='content-wrap container-fluid'>
                <Container fluid className='h-90 p-3 justify-content-center'>
                    <Row className='title justify-content-center'>
                        <img className='title-image' src='/title.png' /> <span className='title-text'>POKER</span>
                    </Row>
                    <Row className='login-row'>
                        <LoginWindow parentSocket={socket} ENDPOINT={ENDPOINT} />
                    </Row>
                </Container>
            </div>
            <footer><span className='footer-text'> © 2020 Chau Tran </span></footer>
        </div>
    );
}

export default Home;