 const express=require('express')
 const cors= require('cors');

const applymiddleWare=(app)=>{
     app.use(cors({
        origin: 'http://localhost:3000'
     }))


     app.use(express.json())

}

module.exports= applymiddleWare