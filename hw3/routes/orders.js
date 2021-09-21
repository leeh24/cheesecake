//Henry Lee
// router to route requests to the corresponding controller method

var express = require('express');
var router = express.Router();
var ordersController = require("../controllers/orders.controller");

/* GET users listing. */
router.get('/', ordersController.getAllOrders); 

/* POST orders with month. */
router.post('/:month', ordersController.getOrdersByMonth); 

module.exports = router;