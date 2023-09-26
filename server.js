const express = require('express')
const fileUpload = require('express-fileupload')
const ejs = require('ejs')
const connect = require('./database/db')
const userRouter = require('./routes/userRoute')
const friendRouter = require('./routes/friendRoute')
const profileRouter = require('./routes/profileRoute')
const scrapRouter = require('./routes/scrapRoute')
const statusRouter = require('./routes/statusRoute')
const testmonialRouter = require('./routes/testmonialRoute')
const photoRouter = require('./routes/photoRoute')
const app = express()


app.use(fileUpload())


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))


app.use('/api',userRouter)
app.use('/api',friendRouter)
app.use('/api',profileRouter)
app.use('/api',scrapRouter)
app.use('/api',statusRouter)
app.use('/api',testmonialRouter)
app.use('/api',photoRouter)


connect();

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server starting')
})

