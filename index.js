const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;




app.get('/', (req, res) => {
  console.log('Client Connected !')
  res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
  socket.on("info", (data) => {
    console.log(data[0], data[1]);
    io.emit("livexy", (data));
  });
});



http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});



