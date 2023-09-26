const express = require('express')
const router = express.Router()
const scrapController = require('../controllers/scrapController')

router.get('/scraps',(req,res)=>{
    scrapController.getAll(req,res)
})
router.get('/scraps/:id',(req,res)=>{
    scrapController.show(req,res)
})
router.post('/scraps',(req,res)=>{
    scrapController.create(req,res)
})
router.post('/scraps/:id',(req,res)=>{
    scrapController.update(req,res)
})
router.delete('/scraps/:id',(req,res)=>{
    scrapController.delete(req,res)
})

module.exports = router