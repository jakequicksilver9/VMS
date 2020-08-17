const { Pool, Client } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass",
  port: "5432"
})

pool.query(
  "CREATE TABLE volunteer(id SERIAL PRIMARY KEY, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password VARCHAR(50) NOT NULL, centers int[], skills VARCHAR(255), availability VARCHAR(255), address VARCHAR(255), phone VARCHAR(50), email VARCHAR(50), education VARCHAR(255),  licenses VARCHAR(255),  emergencyname TEXT, emergencyphone ord VARCHAR(50) NOT NULL, centers int[], skills VARCHAR(255), availability VARCHAR(255), address VARCHAR(255), phone VARCHAR(50), email VARCHAR(50), education VARCHAR(255),  licenses VARCHAR(255),  emergencyname TEXT, emergencyphone VARCHAR(50), emergencyemail VARCHAR(50), emergencyaddress VARCHAR(255), dlfile TEXT, ssfile TEXT, approval TEXT);",
  "CREATE TABLE opportunity(id SERIAL PRIMARY KEY, name TEXT, email TEXT, address TEXT, phonenumber VARCHAR(255));",
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
)

// pool.query(
//   "CREATE TABLE opportunity(id SERIAL PRIMARY KEY, name TEXT, email TEXT, address TEXT, phone number int);",
//   (err, res) => {
//     console.log(err, res);
//     pool.end();
//   }
// )
