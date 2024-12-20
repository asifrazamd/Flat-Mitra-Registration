// Import the mysql2 library, which provides MySQL database functions
const mysql = require('mysql2');
const dotenv=require("dotenv")

dotenv.config();

// Create a MySQL connection pool for efficient database management
/*const pool = mysql.createPool({
  host: 'localhost',      // Database host (usually 'localhost' for local dev)
  user: 'root',           // Database username
  password: 'root',       // Database password
  database: 'mydb'        // Name of the database to connect to
});*/

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Promisify the pool's query methods, allowing async/await for cleaner async code
const promisePool = pool.promise();

// Export the promisified pool to be used for database queries throughout the app
module.exports = promisePool;
