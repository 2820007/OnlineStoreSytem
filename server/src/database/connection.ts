import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/userModel";
import Product from "./models/productModel";

export const sequelize = new Sequelize(envConfig.connectionString as string,
      {
    models: [User,Product],
  }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
         
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};


sequelize.sync({force:false, alter:false}).then(()=>{
  console.log("synced !!.")
})
export default connectDB