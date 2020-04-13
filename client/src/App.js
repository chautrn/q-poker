import React from 'react';

import Home from './components/Home/Home';
import Game from './components/Game/Game';
import About from './components/About/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/about" component={About} />
            </Router>
    );
};

export default App;