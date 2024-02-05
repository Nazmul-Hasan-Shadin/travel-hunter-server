const allCategoriesData = require("../../model/dataHubModel")

const categoriesData=async(req,res,next)=>{
    const getData= await allCategoriesData.find({})
     res.json({message:getData})
} 

module.exports=categoriesData