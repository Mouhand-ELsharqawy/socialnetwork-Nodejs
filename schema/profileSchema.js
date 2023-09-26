const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    city:{
        type:String,
        required: true
    },
    state: {
        type:String
    },
    country: {
        type:String
    },
})
const learningSchema = new mongoose.Schema({
    highSchool: {
        type:String,
    },
    university: {
        type: String
    },
    collage:{
        type:String
    },
    seniorschool:{
        type:String
    },
})


const profileSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "socialusers"
    },
    contactno:{
        type: String,
        required: true
    },
    country: countrySchema,
    learning: learningSchema,
    interest: {
        type:String
    },
    hobby: {
        type:String
    },
    aboutYou: {
        type:String
    },
    age: {
        type:Number
    },
    workProfile: {
        type:String
    },
    DOB: {
        type:Date
    },
    gender:{
        type:String
    },
    Email:{
        type:String,
        unique: true
    }
},{
    timestamps: true
});

module.exports = profileSchema;