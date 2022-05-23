const express = require("express")
const router = express.Router()
const users = require('../controllers/users')


router.get('/add-user',users.getAddUser)
router.post('/add-user',users.postUsers)


module.exports = router

