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
const mysql_1 = __importDefault(require("../src/database/mysql"));
const getAllUsers = (req, res) => {
    res.send("Return all users");
};
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const UID = req.query.uid;
    try {
        const [rows] = yield mysql_1.default.query("SELECT * FROM User WHERE UID = ?", [UID]);
        if (rows.length === 0) {
            res.status(404).send("User not found");
            return;
        }
        res.json(rows);
    }
    catch (error) {
        res.status(500).send("Error fetching user");
        console.error(error);
    }
});
// 將所有方法打包成一個默認導出
exports.default = {
    getAllUsers,
    getUserById,
};
