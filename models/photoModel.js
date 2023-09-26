const mongoose = require('mongoose')
const photoSchema = require('../schema/photoSchema')

const photoModel = mongoose.model('photos',photoSchema);

module.exports = photoModel ;