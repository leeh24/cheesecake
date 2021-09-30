//Henry Lee
// router to route requests to the corresponding controller method

var express = require('express');
var router = express.Router();
var ordersController = require("../controllers/orders.controller");

/* POST create new orders. */
router.post('/', ordersController.createNewOrder); 

module.exports = router;