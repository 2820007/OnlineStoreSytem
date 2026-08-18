import { envConfig } from "./config/config"
import User from "./database/models/userModel"
import bcrypt from "bcrypt"


const adminSeeder= async ()=>{
   const [data]=  await User.findAll({
        where:{
            email:envConfig.adminEmail
        }
     })
     if(!data){
          await User.create({
        username:envConfig.adminUserName,
        password:bcrypt.hashSync(envConfig.adminPass as string,10),
        email:envConfig.adminEmail,
        role:"admin"
     })

     console.log("Admin seeded!!")

     }else{
        console.log("Admin already seeded!!!")
     }


   


}

export default adminSeeder