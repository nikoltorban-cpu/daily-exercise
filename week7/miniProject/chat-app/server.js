const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const users = {};

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);

    users[socket.id] = {
      username,
      room,
    };

    // Welcome message
    socket.emit("message", {
      username: "System",
      text: `Welcome to ${room}!`,
    });

    // Notify others
    socket.to(room).emit("message", {
      username: "System",
      text: `${username} joined the chat`,
    });

    updateUsers(room);
  });

  socket.on("chatMessage", (msg) => {
    const user = users[socket.id];

    if (user) {
      io.to(user.room).emit("message", {
        username: user.username,
        text: msg,
      });
    }
  });

  socket.on("disconnect", () => {
    const user = users[socket.id];

    if (user) {
      io.to(user.room).emit("message", {
        username: "System",
        text: `${user.username} left the chat`,
      });

      delete users[socket.id];

      updateUsers(user.room);
    }
  });

  function updateUsers(room) {
    const roomUsers = Object.values(users).filter((user) => user.room === room);

    io.to(room).emit("roomUsers", roomUsers);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
