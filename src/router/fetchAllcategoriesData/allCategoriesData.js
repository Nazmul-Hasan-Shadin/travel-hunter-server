 
 const express= require('express')
const categoriesData = require('../../api/categoriesData/categoriesData')
const insertData = require('../../api/insertData/insertData')


  const router= express.Router()

 
  router.get('/categories-data',categoriesData)

  router.post('/insert',insertData)

  module.exports=router