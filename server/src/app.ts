import express from "express"
import connectDB from "./database/connection"
import userRouter from "./routes/userRoute"
import categoryRouter from "./routes/categoryRoute"
import productRouter from "./routes/productRoute"

const app=express()
connectDB()

app.use(express.json())


app.use("/api/users",userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/product",productRouter)



export default app