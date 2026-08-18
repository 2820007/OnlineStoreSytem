import { config } from "dotenv";
config()


export const envConfig={
    port:process.env.PORT,
    connectionString:process.env.DATA_BASE_URI,
    jwtSecret:process.env.JWT_SECRET_KEY,
    
}