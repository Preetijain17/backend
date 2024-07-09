import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://preeti1709:preeti1709@cluster0.0vwjsek.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
