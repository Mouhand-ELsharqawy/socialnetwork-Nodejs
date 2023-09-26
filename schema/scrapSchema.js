const mongoose = require('mongoose')
const scrapSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'socialusers'
    },
    Email: {
        type:String,
        required:true,
        unique:true
    },
    scrap:{
        type:String
    },
    likeStatus: {
        type:String
    }
},{
    timestamps: true
});

module.exports = scrapSchema;