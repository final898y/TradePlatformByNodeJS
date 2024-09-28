import bcrypt from 'bcrypt';

async function Hashdata(password: string): Promise<string> {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (err) {
    return '加密時發生錯誤: ' + err;
  }
}

//async function validateHash(hashdata: string):
