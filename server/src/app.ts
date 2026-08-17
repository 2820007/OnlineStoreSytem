import express from "express"
import connectDB from "./database/connection"
import userRouter from "./routes/userRoute"

const app=express()
connectDB()

app.use(express.json())


app.use("/api/users",userRouter)


export default app