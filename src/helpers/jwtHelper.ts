import jwt from "jsonwebtoken"
import env from '../env';
import * as redisHelper from './redisHelper';
import { string } from "zod";


const JwtKEY: jwt.Secret = env.JWTKEY;
const JwtSignoptions :object = {algorithm:'HS256',expiresIn:'1 days'};

async function createJwt(mobilephone:string,password:string) :Promise<string>{
    const payload = {'MobilePhone':mobilephone,'password':password};
    const token = jwt.sign(payload,JwtKEY,JwtSignoptions);
    await redisHelper.setData([mobilephone,token])
    return token;
}

async function verifyJwt(token:string):Promise<boolean>{
    try{
        const decodedjwt =  jwt.verify(token,JwtKEY,JwtSignoptions);
        if(typeof decodedjwt !== 'string'){
            const checkJwtToken = await redisHelper.getData(decodedjwt['MobilePhone'])
            if(checkJwtToken[0]){
                return true
            }
        }
        return false
    }
    catch(error){
        return false
    }
}

export {createJwt,verifyJwt};