import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';

import styles from './Game.module.css';

const Game = () => {
    return (
        <div className='wrapper'>
            <div className='content-wrap'>
                <fieldset>
                    <legend className={styles['poker-table-legend']}> 
                        Test 
                    </legend>
                </fieldset>
            </div>
            <Footer />
        </div>
    );
}

export default Game;
