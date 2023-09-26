const statusController = require('../controllers/statusController')
const express = require('express')
const router = express.Router()


router.get('/status',(req,res)=>{
    statusController.getAll(req,res)
})
router.get('/status/:id',(req,res)=>{
    statusController.show(req,res)
})
router.post('/status',(req,res)=>{
    statusController.create(req,res)
})
router.post('/status/:id',(req,res)=>{
    statusController.update(req,res)
})
router.delete('/status/:id',(req,res)=>{
    statusController.delete(req,res)
})
module.exports = router;
