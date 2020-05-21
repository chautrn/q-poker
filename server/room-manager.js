// TODO: Convert room manager to class
class RoomManager {
    #rooms;
    #clientHandler;

    constructor(clientHandler) {
        this.#rooms = [];
        this.#clientHandler = clientHandler;
    }

    static createUser(userId, name) {
        return {
            userId,
            name,
            clientData: null
        }
    }

    createRoom(userId, name, startingChips, timeLimit, punishment) {
        const room = {
            roomNumber: null,
            users: [],
            gameOptions: { startingChips, timeLimit, punishment } 
        };

        room.users.push(this.constructor.createUser(userId, name)); // initial user

        do {
            room.roomNumber = Math.floor(Math.random()*90000) + 10000;
        }
        // if conflicting room numbers, generate new number
        while (this.#rooms.some(r => r.roomNumber == room.roomNumber));

        this.#rooms.push(room);
        return room.roomNumber; // returning room number for client
    }

    joinRoom(roomNumber, name, userId) {
        const room = this.#rooms.find(r => r.roomNumber == roomNumber);
        if (room === undefined) {
            return false;
        }
        else {
            room.users.push(this.constructor.createUser(userId, name));
            return true;
        }
    }

    deleteUser(userId) {
        for (const room of this.#rooms) {
            const userIndex = room.users.findIndex(user => user.userId == userId);
            if (userIndex != -1) room.users.splice(userIndex, 1);
        }
    }

    deleteEmptyRooms() {
        for (let i = this.#rooms.length - 1; i >= 0; i--) {
            if (this.#rooms[i].users.length == 0) {
                this.#rooms.splice(i, 1);
            }
        }
    }

    printRooms() {
        console.log(this.#rooms);
    }
    
}

module.exports = RoomManager;
