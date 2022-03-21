import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json(), cors());

app.get("/", (req, res) => {
  res.send("TS Backbone");
});

app.listen(port, (error?: Error): void => {
  if (error) {
    const message = "\x1b[31m > Something went wrong!?: ";
    console.error(message, error);
  } else {
    const message = " \n > Server is running on: ";
    console.info(message + "\x1b[36m" + `http://localhost:${port} \n`);
  }
  return;
});
