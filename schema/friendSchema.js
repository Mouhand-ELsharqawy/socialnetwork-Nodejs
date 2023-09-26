const mongoose = require('mongoose');


const friendSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'socialusers',
        required:true
    },
    approvalStatus:{
        type:String,
        required: true
    },
    reqResDetailes: {
        Type:String
    },
    emailId:{
        type: String,
        unique: true,
        Required: true
    }
},{
    timestamps:true
});

module.exports = friendSchema;
