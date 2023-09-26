const profileModel = require('../models/profileModel')
const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const profiles = await profileModel.find()

        res.status(200).json({message: profiles})
    }catch(error){
        res.status(500).json({error: error.message })
    }
}
exports.create = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')
        const profile = await profileModel.create({
            name: userid,
            contactno: req.body.contactno,
            country:{
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            },
            learning: {
                highSchool: req.body.highSchool,
                university: req.body.university,
                collage: req.body.collage,
                seniorschool: req.body.seniorschool
            },
            interest: req.body.interest,
            hobby: req.body.hobby,
            aboutYou: req.body.aboutYou,
            age: req.body.age,
            workProfile: req.body.workProfile,
            DOB: req.body.dob,
            gender: req.body.gender,
            Email: req.body.email
        })
        res.status(200).json({message: 'profile data created', profile})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.show = async (req,res)=>{
    try{
        const profile = await profileModel.findById(req.params.id)
        res.status(200).json(profile)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req,res)=>{
    try{
        const userid = await userModel.find({Email: req.body.email}).findOne().select('_id')
        const profile = await profileModel.findByIdAndUpdate(req.params.id,{
            name: userid,
            contactno: req.body.contactno,
            country:{
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            },
            learning: {
                highSchool: req.body.highSchool,
                university: req.body.university,
                collage: req.body.collage,
                seniorschool: req.body.seniorschool
            },
            interest: req.body.interest,
            hobby: req.body.hobby,
            aboutYou: req.body.aboutYou,
            age: req.body.age,
            workProfile: req.body.workProfile,
            DOB: req.body.DOB,
            gender: req.body.gender,
            Email: req.body.email  
        },{new:true})

        res.status(200).json({message: 'profile data updated', profile}) 
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
exports.delete = async (req,res)=>{
    try{
        await profileModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'profile data deleted'}) 
    }catch(error){
        res.status(500).json({error: error.message}) 
    }
}