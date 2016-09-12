var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.render("index", { title : 'Express', message: 'HI, again!' });
});

module.exports = router;
