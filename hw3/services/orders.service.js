//Henry Lee
// service layer to call database, and run query to get order data 

const db = require('./db');

// Get all orders
async function getAllOrders() {
    const rows = await db.query("select QUANTITY, TOPPING from ORDERS;");

    const data = emptyOrRows(rows);

    let error = null;
    if (!rows) {
        error = "Empty data!"
    }

    return {
        error,
        data
    }
}

// Get orders by given month
async function getOrdersByMonth(month) {
    const rows = await db.query("select QUANTITY, TOPPING from ORDERS where Month=?", [month]);

    const data = emptyOrRows(rows);

    let error = null;
    if (!rows) {
        error = "Empty data!"
    }

    return {
        error,
        data
    }
}

// create new order
async function createNewOrder(quantity, topping, notes) {
    console.log("order service: create new order " + topping);
    //Get max order Id in the DB
    /*var id = await db.query("select MAX(ORDERID) from ORDERS");
    let orderID = id + 1;
    let month = "SEP";
    let day = "10";

    const result = await db.query (
        "INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES(?, ?, ?, ?, ?)",
        [orderID, month, day, quantity, topping, notes]
    );

    let message = 'Error in creating a new order';

    if (result.insertId) {
        message = 'A new order has been created successfully';
    }

    return { message };
    */

    return {
        "message": "okay"
    };
}

function emptyOrRows(rows) {
    if (!rows) {
        return[];
    }
    return rows;
}

module.exports = {
    getAllOrders,
    getOrdersByMonth,
    createNewOrder
}