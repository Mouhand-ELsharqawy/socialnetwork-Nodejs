const mongoose = require('mongoose')
const scrapSchema = require('../schema/scrapSchema')

const scrapModel = mongoose.model('scraps',scrapSchema);
module.exports = scrapModel;