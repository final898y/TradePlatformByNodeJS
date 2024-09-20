"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_1 = __importDefault(require("./src/env"));
const index_1 = __importDefault(require("./routers/index"));
const user_1 = __importDefault(require("./routers/user"));
const app = (0, express_1.default)();
const port = env_1.default.PORT;
app.set("view engine", "pug");
app.use("/", index_1.default);
app.use("/api", user_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(env_1.default.NODE_ENV);
});
