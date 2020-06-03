const
  http = require("http"),
  express = require("express"),
  socketio = require("socket.io"),
  MongoClient = require('mongodb').MongoClient,
  mongo = require('mongodb'),
  url = "mongodb://localhost:27017/";

const SERVER_PORT = 8080;

let nextVisitorNumber = 1;
let onlineClients = new Set();

let dbo;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("DiplomaDB");
  console.log('DB connection successful');
});

function getAllTasks(socket, query, whereTo) {
  dbo.collection("Tasks").find(query, { projection: { _id: 0, title: 1, description: 2, status: 3, author: 4, authorRole: 5} }).toArray(function(err, result) {
    if (result !== null) {
      // console.log('Collection find result is not null', result);
      // response.json(result);
      socket.emit(whereTo, result);
      socket.broadcast.emit(whereTo, result);
      // db.close();
    }
  });
}

let getDirectories = function (src, callback) {
  glob(src + '/**/*', callback);
};

function onNewWebsocketConnection(socket) {
  console.info(`Socket ${socket.id} has connected.`);
  onlineClients.add(socket.id);

  let toDoQuery = {executor: ""};
  getAllTasks(socket, toDoQuery, 'news');

  socket.on("disconnect", () => {
    onlineClients.delete(socket.id);
    console.info(`Socket ${socket.id} has disconnected.`);
  });

  socket.on("news",  data => {
    if (data) {
      console.log(data);
      // getAllTasks(socket, toDoQuery, 'news')
      socket.emit('news', 'Hello from Server');
      socket.broadcast.emit('news', 'Hello from Server');
    }
  });
}

function startServer() {
  // create a new express app
  const app = express();
  // create http server and wrap the express app
  const server = http.createServer(app);
  // bind socket.io to that server
  const io = socketio(server);

  // will fire for every new websocket connection
  io.on("connection", onNewWebsocketConnection);

  // important! must listen from `server`, not `app`, otherwise socket.io won't function correctly
  server.listen(SERVER_PORT, () => console.info(`Listening on port ${SERVER_PORT}.`));

  // will send one message per second to all its clients
  let secondsSinceServerStarted = 0;
  setInterval(() => {
    secondsSinceServerStarted++;
    io.emit("seconds", secondsSinceServerStarted);
    io.emit("online", onlineClients.size);
  }, 1000);
}

startServer();
