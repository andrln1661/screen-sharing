import Peer from "peerjs";

const peer = new Peer("", {
  host: "localhost",
  port: 5000,
  path: "/peerjs",
});

export default peer;
