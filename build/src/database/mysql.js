"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = __importDefault(require("../env"));
const pool = promise_1.default.createPool({
    host: env_1.default.MYSQLHOST,
    user: env_1.default.MYSQLUID,
    password: env_1.default.MYSQLPASSWORD,
    port: env_1.default.MYSQLPORT,
    database: "TradePlatform"
});
exports.default = pool;
