import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../components.css';
import './Home.css';


import LoginWindow from './LoginWindow';

const Home = ({ socket }) => {

    useEffect(() => {
        socket.emit('deleteRoom'); // change to delete all instances of user
    });

    return (
        <div>
            <div className='content-wrap'>
                <Container fluid className='h-90 p-3 justify-content-center'>
                    <Row className='title justify-content-center'>
                        <img className='title-image' src='/title.png' alt='POKER-TITLE'/> <span className='title-text'>POKER</span>
                    </Row>
                    <Row className='login-row'>
                        <LoginWindow socket={socket} />
                    </Row>
                </Container>
            </div>
            <footer><span className='footer-text'> © 2020 Chau Tran </span></footer>
        </div>
    );
}

export default Home;