const express = require("express")
const app = express()

const bodyParser = require('body-parser')
const path = require("path")

const adminRouter = require('./routes/admin')
const userRouter = require('./routes/users')

const error = require("./controllers/errors")

app.set("view engine",'pug') // set the template engine
app.set("views","views") // set the location for the views 

app.use(bodyParser.urlencoded({extended:false})) // to ready req body 
app.use(express.static(path.join(__dirname,"public"))) // to attach static files 

app.use(adminRouter)
app.use(userRouter)

app.use(error.renderNotFound)

app.listen(3000)