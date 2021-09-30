//Henry Lee
// Controller to call service and get orders

const orderService = require("../services/orders.service");

const getAllOrders = async (request, response, next) => {
    console.log("controller: get orders ");
    try {
        response.json(await orderService.getAllOrders());

    } catch (e) {
        console.log(e.message);
        response.sendStatus(500) && next(e);
    }
}

const getOrdersByMonth = async (request, response, next) => {
    console.log("controller: get orders ");
    try {
        response.json(await orderService.getOrdersByMonth(request.params.month));

    } catch (e) {
        console.log(e.message);
        response.sendStatus(500) && next(e);
    }
}

const createNewOrder = async (request, response, next) => {
    console.log("controller: create new order");
    try {
        let quantity = request.body.quantity;
        let topping = request.body.topping;
        let notes = request.body.notes;
        console.log(quantity + topping + notes);
        response.json(await orderService.createNewOrder(quantity, topping, notes));

    } catch (e) {
        console.log(e.message);
        response.sendStatus(500) && next(e);
    }
}


module.exports = {
    getAllOrders,
    getOrdersByMonth,
    createNewOrder
}