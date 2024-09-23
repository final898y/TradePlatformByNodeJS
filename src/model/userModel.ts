import { z } from "zod";

const UserSchema = z.object({
  UID: z.string(),
  Name: z.string(),
  MobilePhone: z.string({
    required_error: "手機為必填欄位",
  }),
  Email: z.string({
    required_error: "Email為必填欄位",
  }).email(),
  Password: z.string({
    required_error: "密碼為必填欄位",
  }).min(8,"密碼長度不可小於 8 個字元"),
  UserStatus: z.enum(["Inactive", "Active", "Suspended"]),
  Birthday: z.coerce.date(),
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
