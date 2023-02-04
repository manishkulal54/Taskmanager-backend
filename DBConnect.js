// import mongoose from "mongoose";
const mongoose=require('mongoose');

const connectionURL = `mongodb+srv://${process.env.UNAME}:${process.env.PASSWORD}@cluster0.w6cnpoo.mongodb.net/todoapp?retryWrites=true&w=majority`;
mongoose.set('strictQuery',false)
const connectToDB=()=>{
    try {
        mongoose.connect(connectionURL,()=>{
            console.log("connected to database ");
        })
    } catch (error) {
        console.log("Can't connect to the database due to ",error );
    }
}
module.exports=connectToDB();