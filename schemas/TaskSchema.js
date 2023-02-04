const mongoose=require('mongoose')

const TaskSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String
    },
    status:{
        type:Boolean
    },
    date:{
        type:Date,
        default:Date.now
    },
})
const Tasks=mongoose.model('tasks',TaskSchema)
module.exports=Tasks