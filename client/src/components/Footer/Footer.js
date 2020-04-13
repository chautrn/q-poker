import React from 'react';
import { Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return (
        <Row className='footer-row justify-content-center'>
            <span className='footer-text'>© 2020 Chau Tran</span>
        </Row>
    )
}

export default Footer;