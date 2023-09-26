const express = require('express')
const photoController = require('../controllers/photoController')
const router = express.Router()

router.get('/upload',(req,res)=>{
    res.render('form')
})
router.get('/photo',(req,res)=>{
    photoController.getAll(req,res)
})
router.get('/photo/:id',(req,res)=>{
    photoController.show(req,res)
})

router.post('/upload',(req,res)=>{
    photoController.create(req,res)
})
router.delete('/photo/:id',(req,res)=>{
    photoController.delete(req,res)
})


module.exports = router;