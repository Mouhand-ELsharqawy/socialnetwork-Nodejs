const mongoose = require('mongoose');
const statusSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialusers'
    },
    Email:{
        type:String,
        required: true,
        unique: true
    }
},{
    timestamps:true
});

module.exports = statusSchema;