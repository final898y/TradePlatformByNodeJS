// env.ts
import { z } from "zod";
import dotenv from "dotenv";

// 載入 .env 檔案的內容
dotenv.config();

// 使用 Zod 定義你的環境變數 schema
const envSchema = z.object({
  PORT: z.string().transform((val) => parseInt(val, 10)).default('2000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// 驗證並解析環境變數
const env = envSchema.parse(process.env);

export default env;