const { Schema, default: mongoose } = require("mongoose");

const allData= new Schema({
      hotelName: String,
      location: String,
      price: Number,
      star: Number,
      category: String,
      details:String

})

const allCategoriesData= mongoose.model('allData', allData)

module.exports= allCategoriesData