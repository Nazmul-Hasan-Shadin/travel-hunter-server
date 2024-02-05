const { Schema, default: mongoose } = require("mongoose");


const carDataSchema = new Schema({
      image: String,
      passenger_number: Number,
      bags_number: Number,
      star: Number,
      description: String,
      car_name: String,
      wifi: Boolean,
      mobile_charger: Boolean,
      bluetooth: Boolean,
      drink_include: Boolean,
      price: Number,
      category: String,
    });


const allData= new Schema({
       
      carData:[carDataSchema],

      hotelData:[
            {
                  hotelName: String,
                  location: String,
                  price: Number,
                  star: Number,
                  category: String,
                  details:String
            }
      ]

})

const allCategoriesData= mongoose.model('allData', allData)

module.exports= allCategoriesData