"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const env_1 = __importDefault(require("../src/env"));
const pool = promise_1.default.createPool({
    host: env_1.default.MYSQLHOST_TEST,
    user: env_1.default.MYSQLUID,
    password: env_1.default.MYSQLPASSWORD,
    port: env_1.default.MYSQLPORT_TEST,
    database: "TradePlatform"
});
function GetUserDetail(UID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [results, fields] = yield pool.query("SELECT * FROM User WHERE UID = ?", [UID]);
            return results;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    pool,
    GetUserDetail
};
