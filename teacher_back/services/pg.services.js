const pg = require('pg');

const { Client } = pg;

const pool = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
})

pool.connect(function (err) {
    if (err) {
        throw new Error(err);
    }
    console.log('db connected');
})

module.exports = pool;