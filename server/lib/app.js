"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json(), (0, cors_1.default)());
const server = (0, http_1.createServer)(app);
app.get("/", (req, res) => {
    res.send("TS Backbone");
});
server.listen(port, (error) => {
    if (error) {
        const message = "\x1b[31m > Something went wrong!?: ";
        console.error(message, error);
    }
    else {
        const message = " \n > Server is listening on: ";
        console.info(message + "\x1b[36m" + `http://localhost:${port} \n`);
    }
    return;
});
