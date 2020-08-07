// For testing purposes
const createPlayer = ({ socketID, username }, startingChips) => {
    return {
        socketID: socketID,
        username: username,
        balance: startingChips,
        inRound: false,
        hand: null,
        move: null,
		bet: 0
    };
}

const createDeck = () => {
    return [
        '2s', '2c', '2h', '2d',
        '3s', '3c', '3h', '3d',
        '4s', '4c', '4h', '4d',
        '5s', '5c', '5h', '5d',
        '6s', '6c', '6h', '6d',
        '7s', '7c', '7h', '7d',
        '8s', '8c', '8h', '8d',
        '9s', '9c', '9h', '9d',
        'Ts', 'Tc', 'Th', 'Td',
        'Js', 'Jc', 'Jh', 'Jd',
        'Qs', 'Qc', 'Qh', 'Qd',
        'Ks', 'Kc', 'Kh', 'Kd',
        'As', 'Ac', 'Ah', 'Ad'
    ];
}

module.exports = {
	createPlayer,
	createDeck
}
