// TODO: apart join and create screen to two components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginWindow.css';

import Join from './Join';
import Create from './Create';

const LoginWindow = ({ parentSocket}) => {
    const [joinScreen, setJoinScreen] = useState(true);

    const socket = parentSocket;

    const joinRoom = (name, room) => {
        socket.emit('joinRoom', { name, room });
    }

    const deleteRoom = () => {
        socket.emit('deleteRoom', socket.id);
    }

    return (
        <div className='container-fluid slideAndFadeIn' key={joinScreen}>
            {joinScreen ?
                <Join {...{ joinRoom, setJoinScreen }}/>
                :
                <Create {...{ socket, setJoinScreen }} />
            }
        </div>
    )
}

export default LoginWindow;