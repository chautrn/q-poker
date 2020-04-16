// TODO: Handle errors
const rooms = [];

const createRoom = (name, startingChips, timeLimit, punishment, userId) => {
    const room = {
        roomNumber: null,
        users: {},
        gameOptions: { startingChips, timeLimit, punishment } 
    };

    room.users[userId] = name;

    // check for room number conflict, generate room number

    do {
        room.roomNumber = Math.floor(Math.random()*90000) + 10000;
        console.log(room.roomNumber);
    }
    while (rooms.some(e => e.roomNumber == room.roomNumber)); // check for conflicting room numbers

    rooms.push(room);
    return room.roomNumber;
}

const joinRoom = (roomNumber, name, userId) => {
    const room = rooms[0]; // change to filter, this is for testing only
    room.users[userId] = name;
}

const deleteUser = userId => {
    for (const room of rooms) {
        if (room.users.hasOwnProperty(userId)) delete room.users[userId];
    }
}

const deleteRoomByUser = userId => {
    const roomIndex = rooms.findIndex(room => room.users.hasOwnProperty(userId));
    if (roomIndex != -1) rooms.splice(roomIndex, 1);
}

const getRoomByUser = userId => {
    return rooms.filter(room => room.users.includes(userId));
}

// Developer functions

const printRooms = () => {
    console.log(rooms);
}

module.exports = {
    createRoom,
    deleteRoomByUser,
    getRoomByUser,
    joinRoom,
    deleteUser,
    printRooms
}