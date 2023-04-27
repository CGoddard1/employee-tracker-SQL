const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'employee_db'
    },
    console.log('Connected to employee_db.')
);

module.exports = db;