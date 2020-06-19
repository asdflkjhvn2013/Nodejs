var express = require("express");
var router = express.Router();
var productsJSON = require("../models/products.json");

/* GET home page. */
router.get("/", function(req, res, next) {
    console.log(productsJSON.body);
    res.render("products", { products: productsJSON.body, layout: "index" });
});
module.exports = router;