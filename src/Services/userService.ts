import {RowDataPacket} from "mysql2/promise";
import * as UserRepository from "../Repository/userRepository"
import {User} from "../model/userModel";


async function GetUserDetail(UID: string): Promise<RowDataPacket[]> {
    try {
       return UserRepository.GetUserDetail(UID)
    } catch (error) {
      throw error;
    }
}
async function Register(RegisterData: User): Promise<RowDataPacket[]> {
  try {
     return UserRepository.Register(RegisterData)
  } catch (error) {
    throw error;
  }
}

  export {
    GetUserDetail,
    Register
  };