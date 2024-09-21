"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// 使用 Zod 定義你的環境變數 schema
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().transform((val) => parseInt(val, 10)).default("2000"),
    NODE_ENV: zod_1.z.enum(["development", "production", "test"]).default("development"),
    MYSQLHOST: zod_1.z.string(),
    MYSQLHOST_TEST: zod_1.z.string(),
    MYSQLUID: zod_1.z.string(),
    MYSQLPASSWORD: zod_1.z.string(),
    MYSQLPORT: zod_1.z.string().transform((val) => parseInt(val, 10)),
    MYSQLPORT_TEST: zod_1.z.string().transform((val) => parseInt(val, 10))
});
// 驗證並解析環境變數
const env = envSchema.parse(process.env);
exports.default = env;
