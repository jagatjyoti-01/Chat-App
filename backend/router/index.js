const router=require('express').Router()

const register=require('../controller/registerUser')
const checkEmail=require('../controller/checkEmail')
const checkPassword=require('../controller/checkPassword')

const userDetails=require("../controller/userDetails")
const logout=require("../controller/LogOut")
const userUpdate=require("../controller/userDetailsUpdate")

router.post("/register",register.register)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/userdetails',userDetails)
router.get("/logout",logout)
router.post("/userUpdate",userUpdate)




module.exports=router