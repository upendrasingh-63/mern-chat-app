
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000

dotenv.config();



app.use(express.json());// to parse incoming request with json payload (form req.body)
app.use(cookieParser())

//before we need to connect to any route we need to excess the middleware above
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)




// app.get('/',(req,res)=>{
//     //root route http://http://127.0.0.1:5000/
//     res.send('Hello World')
//     console.log("/ rout is working")
// })



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
})