import jwt from "jsonwebtoken"
import { envConfig } from "../config/config"


const generateToken=(userId:string)=>{

    //generate token(jwt)

     const token=jwt.sign({userId:userId},envConfig.jwtSecret as string,{
        expiresIn: "7d"
    })
    return token


}

export default generateToken