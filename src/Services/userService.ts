import * as UserRepository from "../repositorys/userRepository"
import {User} from "../model/userModel";


async function GetAllUsers(): Promise<object[]> {
  try {
     return UserRepository.GetAllUsers()
  } catch (error) {
    throw error;
  }
}

async function GetUserDetail(UID: string): Promise<object> {
    try {
       return UserRepository.GetUserDetail(UID)
    } catch (error) {
      throw error;
    }
}
async function Register(RegisterData: User): Promise<string> {
  try {
     return UserRepository.Register(RegisterData)
  } catch (error) {
    throw error;
  }
}

  export {
    GetAllUsers,
    GetUserDetail,
    Register
  };