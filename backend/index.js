import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

// DB connection
mongoose.set("strictQuery", false)
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch (err) {
        console.log('MongoDB connection failed!')
    }
}

// testing purpose
app.get("/", (req, res) => {
    res.send("API is working")
})

// middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/tours', tourRoute)
app.use('/users', userRoute)
app.use('/auth', authRoute)

app.listen(port, () => {
    connect()
    console.log('Server listening on port', port)
})