const testmonialController = require('../controllers/testmonialController')
const express = require('express')
const router = express.Router()

router.get('/testmonial',(req,res)=>{
    testmonialController.getAll(req,res)
})
router.get('/testmonial/:id',(req,res)=>{
    testmonialController.show(req,res)
})
router.post('/testmonial',(req,res)=>{
    testmonialController.create(req,res)
})
router.post('/testmonial/:id',(req,res)=>{
    testmonialController.update(req,res)
})
router.delete('/testmonial/:id',(req,res)=>{
    testmonialController.delete(req,res)
})

module.exports = router