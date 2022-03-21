import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json(), cors());
app.get("/", (req, res) => {
    res.send("TS Backbone");
});
app.listen(port, (error) => {
    if (error) {
        const message = "Something went wrong!?: ";
        console.error(message, error);
    }
    else {
        const message = "Server is running on port: ";
        console.info(message + `http://localhost:${port}`);
    }
    return;
});
