import express from "express"
import connectDB from "./database/connection"

const app=express()
connectDB()


export default app