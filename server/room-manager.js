// TODO: Handle errors
const rooms = [];

const makeRoom = initialUser => {
    let room = {
        roomNumber: null,
        users: [initialUser],
        game: null
    };

    // check for room number conflict, generate room number

    do {
        room.roomNumber = Math.floor(Math.random()*90000) + 10000;
        console.log(room.roomNumber);
    }
    while (rooms.some(e => e.roomNumber == room.roomNumber));

    rooms.push(room);
    return room.roomNumber;
}

const deleteUser = userId => {
    for (const room of rooms) {
        room.users.splice(users.findIndex(e => e == userId), 1);
    }
}

const deleteRoomByUser = userId => {
    rooms.splice(rooms.findIndex(e => e.users.includes(userId)), 1);
}

const getRoomByUser = userId => {
    return rooms.filter(room => room.users.includes(userId));
}

const joinRoom = (roomNumber, userId) => {
    room = rooms[0];
    room.users.push(userId);
}

// Developer functions

const printRooms = () => {
    console.log(rooms);
}

module.exports = {
    makeRoom,
    deleteRoomByUser,
    getRoomByUser,
    joinRoom,
    deleteUser,
    printRooms
}