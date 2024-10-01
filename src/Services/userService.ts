import * as UserRepository from '../repositorys/userRepository';
import { User } from '../model/userModel';
import { ValidateUserPartial } from '../utility/validateData';

async function GetAllUsers(): Promise<object[]> {
  try {
    return UserRepository.GetAllUsers();
  } catch (error) {
    throw error;
  }
};

async function GetUserDetail(UID: string): Promise<object> {
  try {
    return UserRepository.GetUserDetail(UID);
  } catch (error) {
    throw error;
  }
};

async function Register(RegisterData: User): Promise<string> {
  try {
    return UserRepository.Register(RegisterData);
  } catch (error) {
    throw error;
  }
};

async function EditUser(UpdateData: ValidateUserPartial, UID: string): Promise<string> {
  try {
    return UserRepository.EditUser(UpdateData, UID);
  } catch (error) {
    throw error;
  }
};

async function Login(MobilePhone: string,Password: string): Promise<object[]> {
  try {
    return await UserRepository.Login(MobilePhone, Password);
  } catch (error) {
    throw error;
  }
};

export {
  GetAllUsers, GetUserDetail, Register,
  EditUser, Login
};
