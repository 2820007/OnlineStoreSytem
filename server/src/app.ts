import express from "express"
import connectDB from "./database/connection"
import userRouter from "./routes/userRoute"
import categoryRouter from "./routes/categoryRoute"
import productRouter from "./routes/productRoute"
import orderRoute from "./routes/orderRoute"
import cartRoute from "./routes/cartRoute"

const app=express()
connectDB()

app.use(express.json())


app.use("/api/users",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)
app.use("/api/order",orderRoute)
app.use("/api/cart",cartRoute)



export default app