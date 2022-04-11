import { io } from "socket.io-client";

const server = io("http://localhost:5000", {
  secure: false,
});

export default server;
