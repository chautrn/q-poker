// TODO: Handle errors
const rooms = [];

const createRoom = (userId, name, startingChips, timeLimit, punishment) => {
    const room = {
        roomNumber: null,
        users: [],
        gameOptions: { startingChips, timeLimit, punishment } 
    };

    room.users.push([userId, name]); // initial user

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
    room.users.push([userId, name]);
    console.log(JSON.stringify(room.users));
}

const deleteUser = userId => {
    for (const room of rooms) {
        if (room.users.some(user => user.includes(userId))) rooms.splice(rooms.indexOf(room), 1);
    }
}

const deleteRoomByUser = userId => {
    const roomIndex = rooms.findIndex(room => room.users.hasOwnProperty(userId));
    if (roomIndex != -1) rooms.splice(roomIndex, 1);
}

const deleteEmptyRooms = () => {
    for (const room of rooms) {
        if (room.users.length === 0) rooms.splice(rooms.indexOf(room), 1);
    }
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
    joinRoom,
    deleteUser,
    deleteRoomByUser,
    deleteEmptyRooms,
    getRoomByUser,
    printRooms
}
