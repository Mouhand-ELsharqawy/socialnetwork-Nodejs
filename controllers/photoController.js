const photoModel = require('../models/photoModel')
const userModel = require('../models/userModel')
const path = require('path')
const uploadFunction = require('../function/upload')

exports.index = (req,res)=>{
    try{
        res.render('form')
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.getAll = async (req,res)=>{
    try{
        const photos = await photoModel.find()
        res.status(200).json({data: photos})
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}
exports.create = async (req,res)=>{
    try{
        const {image} = req.files
        
        const  imagePath = path.join(__dirname+'/upload/'+image.name)
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')
        const photo = await photoModel.create({
            userId:userid,
            EmailID: req.body.email,
            photo: {
                photoname: image.name,
                photoPath: imagePath
            },
            caption: req.body.caption,
            likeStatus: req.body.like
        })
        image.mv(__dirname + '/upload/' + image.name)
        res.status(200).json("image stored")
    }catch(error){
        res.status(500).json({error: error.message})  
    }
}
exports.show = async(req,res)=>{
    try{
        const photo = await photoModel.findById(req.params.id)
        res.status(200).json({data: photo})
    }catch(error){
        res.status(500).json({error: error.message})    
    }
}
exports.delete = async(req,res)=>{
    try{
        await photoModel.findByIdAndDelete(req.params.id)
        res.status(200).json("image deleted")
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}