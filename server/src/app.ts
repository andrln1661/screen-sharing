import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 5000;
const app = express();

const server = createServer(app);
const io = new Server(server);

app.use(bodyParser.json(), cors());
app.use(cors());

app.get("/", (req, res) => {
  res.send("TS Backbone");
});

io.on("connection", () => {
  console.log("socket connected");
});

server.listen(port, (error?: Error): void => {
  if (error) {
    const message = "\x1b[31m > Something went wrong!?: ";
    console.error(message, error);
  } else {
    const message = " \n > Server is listening on: ";
    console.info(message + "\x1b[36m" + `http://localhost:${port} \n`);
  }
  return;
});
