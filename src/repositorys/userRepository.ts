import {User} from "../model/userModel";
import {SelectQuery,InsertQuery} from "../helpers/mysqlHelper";
import {ValidateRegisterData} from "../utility/validateData";


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
    const filterField = ["UID", "Name", "MobilePhone", "Email", "Password", "Birthday", "Address", "StoreName"];
    const filterValue = [RegisterData.UID, RegisterData.Name, RegisterData.MobilePhone,RegisterData.Email,RegisterData.Password,RegisterData.Birthday,RegisterData.Address,RegisterData.StoreName]
    const result = await InsertQuery("User",filterField,filterValue);
    return ("註冊成功");
    } catch (error) {
      throw error;
    }
}

export {
  GetAllUsers,
  GetUserDetail,
  Register
};
