const express = require("express");
const router = express.Router();

const { login, signup } = require("../Controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes for single middleware

//Protected Route


module.exports = router;