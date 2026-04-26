// server/config/db.js
const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  port: process.env.MYSQLPORT,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Probar la conexión al iniciar
const conectarDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL Conectado (Pool)");
    connection.release(); // Liberar para que otros la usen
  } catch (error) {
    console.error("Error de conexión a MySQL:", error);
  }
};

conectarDB();

module.exports = pool;
