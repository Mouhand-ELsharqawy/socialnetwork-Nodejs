const testmonialModel = require('../models/testmonialModel')
const userModel = require('../models/userModel')
exports.getAll = async (req,res)=>{
    try{
        const testmonials = await testmonialModel.find()
        res.status(200).json({data: testmonials})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.create = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')

        const testmonial = await testmonialModel.create({
            userId:userid,
            Email: req.body.email,
            testmonial: req.body.testmonial,
            likestatus: req.body.likestatus
        })

        res.status(200).json({message: "testmonial data created ",data: testmonial})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.show = async (req,res)=>{
    try{
        const testmonial = await testmonialModel.findById(req.params.id)
        res.status(200).json({data: testmonial})
    }catch(error){
        res.status(500).json({error: error.message})  
    }
}
exports.update = async (req,res)=>{
    try{
        const userid = await userModel.find({Email:req.body.email}).findOne().select('_id')
        const testmonial = await testmonialModel.findByIdAndUpdate(req.params.id,{
            userId:userid,
            Email: req.body.email,
            testmonial: req.body.testmonial,
            likestatus: req.body.likestatus
        },{new: true})
        res.status(200).json({message: "testmonial data updated ",data: testmonial})
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}
exports.delete = async (req,res)=>{
    try{
        await testmonialModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "testmonial data deleted "})
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}