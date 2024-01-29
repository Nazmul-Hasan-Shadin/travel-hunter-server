const { default: mongoose } = require("mongoose")



 const connectToDatabase=async()=>{
     console.log('connecting');
   await mongoose.connect( "mongodb+srv://travel-hunter:1234567890@cluster1.wjj4omp.mongodb.net/?retryWrites=true&w=majority",{
        dbName:'travel-hunter'
    })
    console.log('databas connected');
}


module.exports=connectToDatabase