import { User } from '../model/userModel';
import { SelectQuery, InsertQuery } from '../helpers/mysqlHelper';
import { Hashdata } from '../utility/hashData';


async function GetAllUsers(): Promise<object[]> {
  try {
    const results = await SelectQuery('User');
    const userDetailArray: object[] = results;
    return userDetailArray;
  } catch (error) {
    throw error;
  }
}

async function GetUserDetail(UID: string): Promise<object> {
  try {
    const results = await SelectQuery('User', ['UID'], [UID]);
    const userDetailObject: object = results[0];
    return userDetailObject;
  } catch (error) {
    throw error;
  }
}

async function Register(RegisterData: User): Promise<string> {
  try {
    const filterField = [
      'UID',
      'Name',
      'MobilePhone',
      'Email',
      'Password',
      'Birthday',
      'Address',
      'StoreName',
    ];
    const hashedPassword = await Hashdata(RegisterData.Password);
    const filterValue = [
      RegisterData.UID,
      RegisterData.Name,
      RegisterData.MobilePhone,
      RegisterData.Email,
      hashedPassword,
      RegisterData.Birthday,
      RegisterData.Address,
      RegisterData.StoreName,
    ];
    const result = await InsertQuery('User', filterField, filterValue);
    return '註冊成功';
  } catch (error) {
    throw error;
  }
}


export { GetAllUsers, GetUserDetail, Register };
