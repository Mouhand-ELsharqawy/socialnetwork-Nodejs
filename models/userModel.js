const mongoose = require('mongoose')
const userSchema = require('../schema/userSchema')


const userModel = mongoose.model('socialusers',userSchema);

module.exports = userModel;