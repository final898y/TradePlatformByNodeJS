"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_process_1 = __importDefault(require("node:process"));
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
    //res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(node_process_1.default.env.NODE_ENV);
});
