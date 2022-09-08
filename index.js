const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;






app.get('/', (req, res) => {
  console.log('Client Connected !')
  res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
  socket.on("info", (arg) => {
    console.log(arg); // world
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});



