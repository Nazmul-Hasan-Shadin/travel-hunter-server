const express= require('express')
const app= express()
const applymiddleWare = require('./middleware/applayMiddleware')
const connectToDatabase = require('./db/connectDb')

 


applymiddleWare(app)

const categoriesData= require('./router/fetchAllcategoriesData/allCategoriesData')
const reviews= require('./router/reviews/getAllReviews')

app.use(categoriesData)
app.use(reviews)


app.get('/health',(req,res)=>{
    res.send('database is running')
})

app.all('*',(req,res,next)=>{
     const error= new Error(`the requested url is invaild [${req.url}] `)
     next(error)
})

 app.use((err,req,res,next)=>{
   
     res.status(err.status || 500).json({message:err.message})
 })


app.listen(3001,()=>{
    console.log('server is running');
})

connectToDatabase()