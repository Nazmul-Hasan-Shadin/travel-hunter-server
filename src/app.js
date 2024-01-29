const express= require('express')
const app= express()
const applymiddleWare = require('./middleware/applayMiddleware')
const connectToDatabase = require('./db/connectDb')
 


applymiddleWare(app)



app.get('/health',(req,res)=>{
    res.send('database is running')
})

app.all('*',(req,res,next)=>{
     const error= new Error({message:'requested error is invaild'})
     next(error)
})



app.listen(3001,()=>{
    console.log('server is running');
})

connectToDatabase()