import { ResultSetHeader } from 'mysql2/promise';
import { User } from '../model/userModel';
import { SelectQuery, InsertQuery, UpdateQuery} from '../helpers/mysqlHelper';
import { Hashdata } from '../utility/hashData';
import { ValidateUserPartial } from '../utility/validateData';
import ItransportResult from '../model/transportModel';


async function GetAllUsers(): Promise<object[]> {
  try {
    const results = await SelectQuery('User');
    const userDetailArray: object[] = results;
    return userDetailArray;
  } catch (error) {
    throw error;
  }
};

async function GetUserDetail(UID: string): Promise<object> {
  try {
    const results = await SelectQuery('User', ['UID'], [UID]);
    const userDetailObject: object = results[0];
    return userDetailObject;
  } catch (error) {
    throw error;
  }
};

async function Register(RegisterData: User): Promise<ResultSetHeader> {
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
    return InsertQuery('User', filterField, filterValue);
  } catch (error) {
    throw error;
  }
};

async function EditUser(UpdateData: ValidateUserPartial, UID: string): Promise<ResultSetHeader> {
  try {
    const updateField:string[] = (Object.keys(UpdateData) as (keyof typeof UpdateData)[])
    .filter(key => UpdateData[key] !== undefined);
    const updateAndFilterValue = [UpdateData.Name, UpdateData.MobilePhone, UpdateData.Email,
      UpdateData.Birthday, UpdateData.Address,UpdateData.StoreName, UID].filter(value => value !== undefined);
    return UpdateQuery('User', updateField, updateAndFilterValue, 'UID');
  } catch (error) {
    throw error;
  }
};

async function Login(MobilePhone: string,Password: string): Promise<object[]> {
  try {
    const results = await SelectQuery('User', ['MobilePhone'], [MobilePhone]);
    return results;
    } catch (error) {
      throw error;
    }
};




export {
  GetAllUsers, GetUserDetail, Register,
  EditUser, Login
};
