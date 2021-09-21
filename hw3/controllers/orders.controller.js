//Henry Lee
// Controller to call service and get orders

const orderService = require("../services/orders.service");

const getAllOrders = async (req, res, next) => {
    console.log("controller: get orders ");
    try {
        res.json(await orderService.getAllOrders());

    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

const getOrdersByMonth = async (req, res, next) => {
    console.log("controller: get orders ");
    try {
        res.json(await orderService.getOrdersByMonth(req.params.month));

        //res.sendStatus(200)
        //next()
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getAllOrders,
    getOrdersByMonth
}