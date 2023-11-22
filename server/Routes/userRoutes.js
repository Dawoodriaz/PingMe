const express = require('express')
const { model } = require('mongoose')
const { protect } = require("../middleware/authMiddleware");
const {registerUser , authUser , allUsers} = require("../controller/userControllers")

const router = express.Router()



router.post("/api/user", registerUser)
// router.route("/").post(registerUser);
router.post("/login", authUser)

router.get("/api/user",protect, allUsers)


module.exports = router
