import express from "express"
import connectDB from "./database/connection"
import userRouter from "./routes/userRoute"
import categoryRouter from "./routes/categoryRoute"

const app=express()
connectDB()

app.use(express.json())


app.use("/api/users",userRouter)
app.use("/api/category",categoryRouter)


export default app