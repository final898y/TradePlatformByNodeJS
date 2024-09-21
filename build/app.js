"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./src/env"));
const indexRouter_1 = __importDefault(require("./Routers/indexRouter"));
const userRouter_1 = __importDefault(require("./Routers/userRouter"));
const app = (0, express_1.default)();
const port = env_1.default.PORT;
app.set("view engine", "pug");
app.set('views', './views');
app.use("/", indexRouter_1.default);
app.use("/api", userRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(env_1.default.NODE_ENV);
});
