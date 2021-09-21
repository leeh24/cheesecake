//Henry Lee
// create db connection and execute query

const mysql = require('mysql2/promise');
const dbConfig = require('../config/db.config');

async function query(sql, params) {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [results,] = await connection.execute(sql, params);

        return results;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    query
}