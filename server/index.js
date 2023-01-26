import express from 'express'
import dotenv from 'dotenv'
import Connection from "./DataBase/db.js"
import bodyParser from 'body-parser'
import cors from 'cors'
import Route from './route/user.js'
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.use('/',Route)

dotenv.config({path :"./config/.env"})

Connection();

app.listen(process.env.PORT, ()=> console.log(`Your Server Running on Port ${process.env.PORT}`))