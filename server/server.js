const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile('/index.html');
});

io.on('connect', (socket) => {
  console.log('A new client has connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('A client has disconnected:', socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
