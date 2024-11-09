import jwt from "jsonwebtoken"
import env from '../env';

const JwtKEY: jwt.Secret = env.JWTKEY;
const JwtSignoptions :object = {algorithm:'HS256',expiresIn:'1 days'};

function createJwt(mobilephone:string,password:string) :string{
    const payload = {'MobilePhone':mobilephone,'password':password};
    const token = jwt.sign(payload,JwtKEY,JwtSignoptions);
    return token;
}

function verifyJwt(token:string):boolean{
    try{
        const decodedjwt =  jwt.verify(token,JwtKEY,JwtSignoptions);
        return true
    }
    catch(error){
        return false
    }
}

export {createJwt,verifyJwt};