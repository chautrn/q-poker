import React from 'react';

import Home from './components/Home/Home';
import Game from './components/Game/Game';
import About from './components/About/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import io from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const ENDPOINT = 'localhost:5000';
    const parentSocket = io(ENDPOINT);
    return (
            <Router>
                <Route path="/" exact render={() => <Home socket={parentSocket} />} />
                <Route path="/game" component={Game} />
                <Route path="/about" component={About} />
            </Router>
    );
};

export default App;