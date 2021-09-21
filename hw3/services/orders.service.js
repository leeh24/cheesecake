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

function emptyOrRows(rows) {
    if (!rows) {
        return[];
    }
    return rows;
}

module.exports = {
    getAllOrders,
    getOrdersByMonth
}