// TODO: Convert room manager to class
const rooms = [];
const clientHandler;

const addToClientHandler = handler => {
    clientHandler = handler;
}
const createRoom = (userId, name, startingChips, timeLimit, punishment) => {
    const room = {
        roomNumber: null,
        users: [],
        gameOptions: { startingChips, timeLimit, punishment } 
    }

    const user = {
        userId,
        name,
        clientData: null,
    }

    room.users.push(user); // initial user

    console.log(JSON.stringify(room.users));

    // check for room number conflict, generate room number

    do {
        room.roomNumber = Math.floor(Math.random()*90000) + 10000;
    }
    while (rooms.some(e => e.roomNumber == room.roomNumber)); // check for conflicting room numbers

    rooms.push(room);
    return room.roomNumber;
}

const joinRoom = (roomNumber, name, userId) => {
    const room = rooms[0]; // change to filter, this is for testing only
    room.users.push({userId, name});
}

const deleteUser = userId => {
    for (const room of rooms) {
        const userIndex = room.users.findIndex(user => user.userId === userId);
        if (userIndex != -1) room.users.splice(userIndex, 1);
    }
}

const deleteEmptyRooms = () => {
    for (let i = rooms.length - 1; i >= 0; i--) {
        if (rooms[i].users.length === 0) {
            rooms.splice(i, 1);
        }
    }
}

// Developer functions

const printRooms = () => {
    console.log(rooms);
}

module.exports = {
    createRoom,
    joinRoom,
    deleteUser,
    deleteEmptyRooms,
    printRooms
}
