const app = require('express')();
const http = require('http');
const cors = require('cors');
const router = require('./router');
const server = http.createServer(app);
const roomManager = require('./room-manager');
const io = require('socket.io')(server);

app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5000;

const emitToUserId = (userId, event, data) => {
    io.sockets.to(userId).emit(userId, event, data);
}

const pokerRoomManager = new roomManager(emitToUserId); 

io.on('connection', socket => {
    console.log('established connection to socket');

    socket.on('joinRoom', ({roomNumber, name}) => {
        pokerRoomManager.joinRoom(roomNumber, name, socket.id);
        pokerRoomManager.printRooms();
    });

    socket.on('createRoom', ({ name, startingChips, timeLimit, punishment }) => {
        const roomNumber = pokerRoomManager.createRoom(socket.id, name, startingChips, timeLimit, punishment);
        pokerRoomManager.printRooms();
        socket.emit('currentRoom', roomNumber);
    });

    socket.on('createGame', ({ startingChips, timeLimit, smallBlind, punishment, room }) => {
        console.log(startingChips, timeLimit, smallBlind, punishment, room);
    })

    socket.on('disconnect', () => {
        pokerRoomManager.deleteUser(socket.id);
        pokerRoomManager.deleteEmptyRooms();
        pokerRoomManager.printRooms();
    })
});

server.listen(PORT, () => {
    console.log("server is now online");
});
