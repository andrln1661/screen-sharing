import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { Socket } from "socket.io";
import { Rooms } from "../../client/src/types";
import { ExpressPeerServer } from "peer";

const rooms: Rooms = {};

const port = process.env.PORT || 5000;
const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const peerServer = ExpressPeerServer(server, {
  proxied: true,
  path: "/peerjs",
});

app.use(bodyParser.json(), cors());
app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("TS Backbone");
});

io.on("connection", (socket: Socket) => {
  socket.on("get-rooms", (socket: Socket) => {
    io.emit("get-rooms", rooms);
  });
  socket.on("create-room", (roomid, date) => {
    if (!Object.keys(rooms).includes(roomid)) {
      rooms[roomid] = {
        id: roomid,
        created: date,
      };
    }
  });
});

server.listen(port, (error?: Error): void => {
  if (error) {
    const message = "\x1b[31m > Something went wrong!?: ";
    console.error(message, error);
  } else {
    const message = " \n > Server is listening on: ";
    console.info(message + "\x1b[36m" + `http://localhost:${port} \n`);
  }
});
