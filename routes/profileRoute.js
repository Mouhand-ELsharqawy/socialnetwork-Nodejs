const express = require('express')
const profileController = require('../controllers/profileController')
const router = express.Router()

router.get('/profiles',(req,res)=>[
  profileController.getAll(req,res)  
])

router.get('/profiles/:id',(req,res)=>{
    profileController.show(req,res)
})
router.post('/profiles',(req,res)=>{
    profileController.create(req,res)
})
router.post('/profiles/:id',(req,res)=>{
    profileController.update(req,res)
})
router.delete('/profiles/:id',(req,res)=>{
    profileController.delete(req,res)
})
module.exports = router;