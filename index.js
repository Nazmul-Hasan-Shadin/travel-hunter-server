const express=require('express')
 const port = process.env.PORT || 3001
const http= require('http')
 const app= require('./src/app')
const connectToDatabase = require('./src/db/connectDb')
const server= http.createServer(app)

 
connectToDatabase()


server.listen(port,()=>{
    console.log('server is running');
})