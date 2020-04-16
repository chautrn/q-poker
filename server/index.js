const app = require('express')();
const http = require('http');
const cors = require('cors');
const router = require('./router');

const server = http.createServer(app);

const io = require('socket.io')(server);

const roomManager = require('./room-manager');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

io.on('connection', socket => {
    console.log('established connection to socket');

    socket.on('joinRoom', ({roomNumber, name}) => {
        roomManager.joinRoom(roomNumber, name, socket.id);
        roomManager.printRooms();
    });

    socket.on('createRoom', ({ name, startingChips, timeLimit, punishment }) => {
        const roomNumber = roomManager.createRoom(name, startingChips, timeLimit, punishment, socket.id);
        roomManager.printRooms();
        socket.emit('currentRoom', roomNumber);
    });

    socket.on('deleteRoom', () => {
        roomManager.deleteRoomByUser(socket.id);
        roomManager.printRooms();
    })

    socket.on('createGame', ({ startingChips, timeLimit, smallBlind, punishment, room }) => {
        console.log(startingChips, timeLimit, smallBlind, punishment, room);
    })

    socket.on('testPrint', () => console.log("TEST"));

    socket.on('disconnect', () => {
        roomManager.deleteRoomByUser(socket.id);
        roomManager.printRooms();
        console.log("DELETED");
    })
});

server.listen(PORT, () => {
    console.log("server is now online");
});