import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/config";
import User from "./models/userModel";
import Product from "./models/productModel";
import Category from "./models/categoryModel";
import Order from "./models/orderModel";
import OrderDetails from "./models/orderDetails";
import Payment from "./models/paymentModel";

export const sequelize = new Sequelize(envConfig.connectionString as string,
      {
    models: [User,Product,Category,Order,OrderDetails,Payment],
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



//relationships

Category.hasOne(Product,{foreignKey:'categoryId'})
Product.belongsTo(Category,{foreignKey:'categoryId'})




export default connectDB