import bcrypt from 'bcrypt';

async function Hashdata(password: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (err) {
    return '加密時發生錯誤: ' + err;
  }
}

async function ValidateHash(password: string, hashdata: string): Promise<boolean> {
  try {
    const matchResult = await bcrypt.compare(password, hashdata);
    return matchResult;
  } catch (err) {
    console.log('發生錯誤: ' + err);
    return false;
  }
}
export { Hashdata, ValidateHash };
