import mysql from 'mysql';

require('dotenv').config();
//Connect to database
let con = mysql.createConnection({
    host:       process.env.SQL_HOST,
    user:       process.env.SQL_USER,
    password:   process.env.SQL_PASSWORD,
    database:   process.env.SQL_DATABASE
});

export default con;