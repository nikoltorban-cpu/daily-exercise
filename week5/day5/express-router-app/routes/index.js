const express = require("express");

const router = express.Router();


// HOMEPAGE

router.get("/", (req, res) => {

  res.send("Welcome to the Homepage!");

});


// ABOUT PAGE

router.get("/about", (req, res) => {

  res.send("Welcome to the About Us page!");

});


module.exports = router;