const reviewModel = require("../../model/reviewModel")


const reviews=async(req,res)=>{
     const findReviews=await reviewModel.find()
      res.json({success:true, message:findReviews})

}
module.exports= reviews