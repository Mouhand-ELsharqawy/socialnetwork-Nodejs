const mongoose = require('mongoose')
const photoNameSchema = new mongoose.Schema({
    photoname: {
        type:String,
    },
    photoPath: {
        type:String,
    }
})


const photoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialusers',
        required: true,
    },
    EmailID: {
        type:String,
        required: true
    },
    photo: photoNameSchema,
    caption: {
        type:String
    },
    likeStatus: {
        type:String
    },
    isProfilePhoto: {
        type:Boolean,
        default: false
    },
    uploadDate: {
        type:Date,
        default:Date.now()
    }
},{
    timestamps:true
});

module.exports = photoSchema;