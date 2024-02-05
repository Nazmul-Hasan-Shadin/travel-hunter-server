const { default: mongoose } = require("mongoose")



 const connectToDatabase=async()=>{
     console.log('connecting');
   await mongoose.connect( `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERNAME}@cluster1.wjj4omp.mongodb.net/?retryWrites=true&w=majority`,{
        dbName:'travel-hunter'
    })
    console.log('databas connected');
}


module.exports=connectToDatabase