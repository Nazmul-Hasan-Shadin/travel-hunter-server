const express = require("express");
const reviews = require("../../api/reviews/reviews");

const router = express.Router();

router.get("/reviews", reviews);

module.exports = router;
