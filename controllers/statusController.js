const statusModel = require('../models/statusModel')
const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const statuses = await statusModel.find()
        res.status(200).json({data: statuses})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.create = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const status = await statusModel.create({
            userId: userid,
            Email: req.body.email
        })
        res.status(200).json({message: "data created",data: status}) 
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.show = async (req,res)=>{
    try{
        const status = await statusModel.findById(req.params.id)
        res.status(200).json({data: status})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.update = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const status = await statusModel.findByIdAndUpdate(req.params.id,{
            userId: userid,
            Email: req.body.email
        },{new:true})
        res.status(200).json({message: "data updated",data: status}) 
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}
exports.delete = async (req,res)=>{
    try{
        await statusModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "data deleted"}) 
    }catch(error){
        res.status(500).json({error: error.message})
    }
}