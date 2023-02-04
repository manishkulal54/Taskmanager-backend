// import express from "express";
const express=require('express')
const Users=require('../schemas/Userschema')
const router=express.Router()


router.post('/signup',async(req,res)=>{
    console
    const {name,email,password}=req.body
   try {
let user=await Users.findOne({email:email})
if(user){

    return res.status(400).json({message:"error",error:"User already exists"})
}
user=await Users.create({
    name:name,
    email:email,
    password:password
})
res.status(201).json({message:"success",data:user})
} catch (error) {
    return res.status(500).json({message:"error",error:"Internal server error"})
   }
})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body
   try {
let user=await Users.findOne({email:email})
if(!user){
return res.status(400).json({message:"error",error:"Invalid credential"})
}
if(user.password===password)return res.status(201).json({message:"success",data:user})
else return res.status(404).json({message:"error",error:"Invalid credential"})
} catch (error) {
    return res.status(500).json({message:"error",error:"Internal server error"})
   }
})

router.get('/getuserdata:id',async(req,res)=>{
    const id=req.params.id.replace(":","")
    try {
        let user=await Users.findById(id)
        if(user) return res.status(200).json({message:"success",data:user})
        else return res.status(404).json({message:"error",error:"user not found"})
    } catch (error) {
        return res.status(404).json({message:"error",error:"user not found"})
    }
})

module.exports=router