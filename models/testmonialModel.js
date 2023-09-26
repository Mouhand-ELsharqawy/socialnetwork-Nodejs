const mongoose = require('mongoose')
const testmonialSchema = require('../schema/testmonialschema')

const testmonialModel = mongoose.model('testmonials',testmonialSchema);

module.exports = testmonialModel;