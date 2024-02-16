const express = require("express");
const SignIn = require("../../api/authentication/signIn");
const LoginAuthentication = require("../../api/authentication/Login");
const router = express.Router();

router.post("/signup", SignIn);
router.post("/signIn", LoginAuthentication);

module.exports = router;
