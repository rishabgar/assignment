import mysql from "mysql2/promise";

let pool;

export async function initDB() {
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    connectionLimit: 10,
  });

  await pool.query("SELECT 1");
  console.log("MySQL connected");
}

export function getDB() {
  return pool;
}
