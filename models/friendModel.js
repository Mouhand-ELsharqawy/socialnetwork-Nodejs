const mongoose = require('mongoose')
const friendSchema = require('../schema/friendSchema')

const friendModel = mongoose.model('friends',friendSchema)

module.exports = friendModel;