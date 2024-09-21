import { RowDataPacket } from "mysql2/promise";

export default interface User extends RowDataPacket {
    UID: string;
    Name: string;
    MobilePhone: string;
    Email: string;
    Password: string;
    UserStatus: number;
    Birthday: Date; // 使用 Date 类型
    Address: string;
    StoreName: string;
    CreateDate: Date; // 使用 Date 类型
    UpdateDate: Date; // 使用 Date 类型
  };