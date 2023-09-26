const express = require('express')
const friendController = require('../controllers/friendController')
const router = express.Router();

router.get('/friends',(req,res)=>{
    friendController.getAll(req,res)
})
router.get('/friends/:id',(req,res)=>{
    friendController.show(req,res)
})
router.post('/friends',(req,res)=>{
    friendController.create(req,res)
})

router.post('/friends/:id',(req,res)=>{
    friendController.update(req,res)
})

router.delete('/friends/:id',(req,res)=>{
    friendController.delete(req,res)
})

module.exports = router;