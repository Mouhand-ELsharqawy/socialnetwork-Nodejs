const mongoose = require('mongoose')
const nameSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})
const addressSchema = new mongoose.Schema({
    city: {
        type:String
    },
    state: {
        type:String
    },
    country: {
        type:String
    }
})
const userSchema = new mongoose.Schema({
    name: nameSchema,
    age: {
        type:Number
    },
    DOB: {
        type: Date
    },
    gender: {
        type:String
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        unique: true,
        required:true
    },
    address: addressSchema
},{
    timestamps:true
});

module.exports = userSchema;