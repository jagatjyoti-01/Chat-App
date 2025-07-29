const router=require('express').Router()

const register=require('../controller/registerUser')
const checkEmail=require('../controller/checkEmail')
const checkPassword=require('../controller/checkPassword')

router.post("/register",register.register)
router.post('/email',checkEmail)
router.post('/password',checkPassword)

module.exports=router