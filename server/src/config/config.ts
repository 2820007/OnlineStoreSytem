import { config } from "dotenv";
config()


export const envConfig={
    port:process.env.PORT,
    connectionString:process.env.DATA_BASE_URI,
    jwtSecret:process.env.JWT_SECRET_KEY,
    email:process.env.EMAIL,
    emailPass:process.env.EMAIL_PASS,
    adminEmail:process.env.ADMIN_EMAIL,
    adminPass:process.env.ADMIN_PASS,
    adminUserName:process.env.ADMIN_USERNAME
    
}