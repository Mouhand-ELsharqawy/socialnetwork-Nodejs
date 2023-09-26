const mongoose = require('mongoose')

const testmonialSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialusers' 
    },
    Email: {
        type:String,
        required: true
    },
    testmonial:{
        type:String,
        required:true
    },
    likestatus: {
        type:String
    }
},{
    timestamps:true
});

module.exports = testmonialSchema;