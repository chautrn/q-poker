// TODO: apart join and create screen to two components
import React, { useState } from 'react';

import './Lobby.css';

import LobbyJoin from './LobbyJoin';
import LobbyCreate from './LobbyCreate';

const Lobby = ({ socket }) => {
    const [joinScreen, setJoinScreen] = useState(true);

    return (
        <div className='container-fluid slideAndFadeIn' key={joinScreen}>
            {joinScreen ?
                <LobbyJoin {...{ socket, setJoinScreen }}/>
                :
                <LobbyCreate {...{ socket, setJoinScreen }} />
            }
        </div>
    )
}

export default Lobby;