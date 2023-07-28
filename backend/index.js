import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Server listening on port', port)
})