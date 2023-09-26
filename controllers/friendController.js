const friendModel = require('../models/friendModel')
const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const friends = await friendModel.find()
        res.status(200).json({message: friends})
    }catch(error){
       res.status(500).json({error: error.message}) 
    }
}

exports.create = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.friend}).findOne().select('_id')
        
        const friend = await friendModel.create({
            userId: userid,
            approvalStatus: req.body.approvalStatus,
            reqResDetailes: req.body.reqResDetailes,
            emailId: req.body.email
        })
        res.status(200).json({message: " friend data created",friend})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const friend = await friendModel.findByIdAndUpdate(req.params.id,{
            userId: userid,
            approvalStatus: req.body.approvalStatus,
            reqResDetailes: req.body.reqResDetailes,
            emailId: req.body.email
        },{new:true})

        res.status(200).json({message: " friend data updated",friend})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.show = async (req,res)=>{
    try{
        const friend = await friendModel.findById(req.params.id)
        res.status(200).json({friend})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.delete = async (req,res)=>{
    try{
        await friendModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: " friend data deleted"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}