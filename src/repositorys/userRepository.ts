import {User} from "../model/userModel";
import {SelectQuery} from "../helpers/mysqlHelper";

async function GetAllUsers(): Promise<object[]> {
  try {
    const results = await await SelectQuery("User");
    const userDetailArray:object[] = results;
    return userDetailArray;
  } catch (error) {
    throw error;
  }
}

async function GetUserDetail(UID: string): Promise<object> {
  try {
    const results = await await SelectQuery("User",["UID"],[UID]);
    const userDetailObject: object  =  results[0];
    return userDetailObject;
  } catch (error) {
    throw error;
  }
}

async function Register(RegisterData: User): Promise<string> {
  try {
    //const [results, fields] = await pool.query<RowDataPacket[]>("SELECT * FROM User WHERE UID = ?", [RegisterData.UID]);
    return "";
  } catch (error) {
    throw error;
  }
}

export {
  GetAllUsers,
  GetUserDetail,
  Register
};
