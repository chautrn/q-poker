// TODO: apart join and create screen to two components
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginWindow.css';

import Join from './Join';
import Create from './Create';

const LoginWindow = ({ socket }) => {
    const [joinScreen, setJoinScreen] = useState(true);

    return (
        <div className='container-fluid slideAndFadeIn' key={joinScreen}>
            {joinScreen ?
                <Join {...{ socket, setJoinScreen }}/>
                :
                <Create {...{ socket, setJoinScreen }} />
            }
        </div>
    )
}

export default LoginWindow;