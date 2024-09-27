import { z } from "zod";

const UserSchema = z.object({
  UID: z.string(),

  Name: z.string({required_error: "姓名為必填欄位", }),

  MobilePhone: z.string({
    required_error: "手機為必填欄位",
  }).length(10, "手機號碼必須為 10 碼").regex(/^\d+$/, "手機號碼只能包含數字"),

  Email: z.string({
    required_error: "Email為必填欄位",
  }).email("電子郵件格式錯誤"),

  Password: z.string({
    required_error: "密碼為必填欄位",
  }).min(8,"密碼長度不可小於 8 個字元"),
  
  UserStatus: z.enum(["Inactive", "Active", "Suspended"]).default("Inactive"),

  Birthday: z.coerce.date({required_error: "生日為必填欄位", }),
  
  Address: z.string().optional(),
  StoreName: z.string().optional(),
  CreateDate: z.date().optional(),
  UpdateDate: z.date().optional(),
});
type User = z.infer<typeof UserSchema>
export {
  User,
  UserSchema
}
