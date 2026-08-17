import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/userModel";

export const sequelize = new Sequelize(envConfig.connectionString as string,
      {
    models: [User],
  }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully");
          await sequelize.sync();
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

export default connectDB