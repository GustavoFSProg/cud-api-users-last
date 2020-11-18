import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

dotenv.config()

const { PORT } = process.env

mongoose.connect(process.env.DATABASE_KEY)

const app = express()

app.use(express.json())
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use('/', routes)

app.listen(PORT, console.log(`API Running on PORT: ${PORT}`))

export default app
