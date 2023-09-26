const mongoose = require('mongoose')
const statusSchema = require('../schema/statusSchema')

const statusModel = mongoose.model('status',statusSchema)
module.exports = statusModel;