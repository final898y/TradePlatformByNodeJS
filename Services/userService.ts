import mysql from "mysql2/promise";
import UserRepository from "../Repository/userRepository"
import userModel from "../src/model/userModel"


async function GetUserDetail(UID: string): Promise<userModel[]> {
    try {
       return UserRepository.GetUserDetail(UID)
    } catch (error) {
      throw error;
    }
  }

  export default{
    GetUserDetail
  };