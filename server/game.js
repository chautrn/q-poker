// Input are passed in from room-manager.js

const createUser = (userId, username, balance) => {
    return {
        id: userId,
        name: username,
        currentBalance: balance
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

class Poker {
    constructor(initialUser, { startingChips, timeLimit, punishment }) { // gameOptions = { startingChips, timeLimit, punishment }
        // Options
        this.startingChips = startingChips;
        this.timeLimit = timeLimit;
        this.punishment = punishment;

        // Game data 
        this.deck = createDeck();
        this.users = [createUser(initialUser)];
        /*
            Betting Rounds:
            Preflop 0
            Flop 1
            Turn 2
            River 3
            Showdown 4
            */
        this.bettingRound = 0;
        this.pot = 0;
        this.communityCards = [];
        this.buttonIndex = 0;

        // Round data
        this.currentBet;
    }
}

let testObj = { startingChips: 1200, timeLimit: 20, punishment: true };

let pokerObj = new Poker("chau", testObj);


console.log(JSON.stringify(pokerObj));
