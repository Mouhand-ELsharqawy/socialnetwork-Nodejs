const userModel = require('../models/userModel')

exports.getAll = async (req,res)=>{
    try{
        const users = await userModel.find()
        res.status(200).json({message: users})

    }catch(error){
        res.status(500).json({error: error.message})
    }
}


exports.create = async (req,res)=>{
    try{
        const user = await userModel.create({
            name:{
                firstName: req.body.firstname,
                lastName: req.body.lastname
            },
            age: req.body.age,
            DOB: req.body.dob,
            gender: req.body.gender,
            Email: req.body.email,
            phone: req.body.phone,
            address: {
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            }
        })

        res.status(200).json({message: 'user created'})

    }catch(error){
        res.status(500).json({error:error.message})
    }
}



exports.show = async (req,res)=>{
    try{
        const user = await userModel.findById(req.params.id)
        res.status(200).json({ message: user })
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.update =  async (req,res)=>{
    try{
        await userModel.findByIdAndUpdate(req.params.id,{
            name:{
                firstName: req.body.firstname,
                lastName: req.body.lastname
            },
            age: req.body.age,
            DOB: req.body.dob,
            gender: req.body.gender,
            Email: req.body.email,
            phone: req.body.phone,
            address: {
                city: req.body.city,
                state: req.body.state,
                country: req.body.country
            }
        },{new: true})
        res.status(200).json({message: 'user updated'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.delete = async (req,res)=>{
    try{
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'user deleted'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
