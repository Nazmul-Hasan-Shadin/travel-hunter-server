const mongoose= require('mongoose')



const reviewSchema = new mongoose.Schema({
   
    
        image: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true,
          },
          star: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
          },
          name: {
            type: String,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
    }
  
);

const reviewModel = mongoose.model('clienReview',reviewSchema);

module.exports=reviewModel