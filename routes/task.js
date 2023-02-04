const express=require('express')
const Tasks=require('../schemas/TaskSchema')
const router=express.Router()

router.put('/createtask:id',async(req,res)=>{
    const id=req.params.id.replace(":","")
    const {title,detail,status}=req.body
    try{
        let task=await Tasks.create({
            userId:id,
            title,
            detail,
            status
        })
        if(task)return res.status(200).json({message:"success"})
        else return res.status(200).json({message:"error",error:"Can't create your task check once"})
    }catch(error){
    res.status(500).json({message:"error",error:"internal server error"})
}
})

router.get('/getalltask:id',async(req,res)=>{
    const id=req.params.id.replace(":","")
    let tasks=[]
    try{
    tasks=await Tasks.find({userId:id}) 
    if(tasks)return res.status(200).json({message:"success",data:tasks})
    else return res.status(200).json({message:"error",error:"Cant fetch your tasks"})
}catch(error){
    res.status(500).json({message:"error",error:"internal server error"})
}
})

router.put('/updatestatus:taskid',async(req,res)=>{
    const id=req.params.taskid.replace(":","")
    try{
    let task=await Tasks.findByIdAndUpdate(id,{status:req.body.status})
    if(task)return res.status(200).json({message:"success",data:task})
    else return res.status(200).json({message:"error",error:"Cant fetch your tasks"})
}catch(error){
    res.status(500).json({message:"error",error:"internal server error"})
}
})

router.delete('/deletetask:taskid',async(req,res)=>{
    const id=req.params.taskid.replace(":","")
    try {
        let task=await Tasks.deleteOne({_id:id})
    res.status(200).json({message:"success",data:"deleted"})
    } catch (error) {
        res.status(500).json({message:"error",error:"internal server error"})
    }
})


module.exports=router