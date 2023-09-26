const scrapModel = require('../models/scrapModel')
const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const scraps = await scrapModel.find()
        res.status(200).json({data: scraps})

    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.create = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const scrap = await scrapModel.create({
            userId: userid,
            Email: req.body.email,
            scrap: req.body.scrap,
            likeStatus: req.body.likeStatus
        })
        res.status(200).json({message: " scrap data created",data: scrap})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.show = async (req,res)=>{
    try{
        const scrap = await scrapModel.findById(req.params.id)
        res.status(200).json({data: scrap})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const scrap = await scrapModel.findByIdAndUpdate(req.params.id,{
            userId: userid,
            Email: req.body.email,
            scrap: req.body.scrap,
            likeStatus: req.body.likeStatus
        },{new:true})
        res.status(200).json({message: " scrap data updated",data: scrap})
    }catch(error){
        res.status(500).json({error: error.message})   
    }
}
exports.delete = async (req,res)=>{
    try{
        const scrap = scrapModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: " scrap data deleted"})
    }catch(error){
        res.status(500).json({error: error.message})  
    }
}