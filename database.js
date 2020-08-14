const { Pool, Client } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass",
  port: "5432"
})

pool.query(
  "CREATE TABLE volunteer(id SERIAL PRIMARY KEY, firstname TEXT, lastname TEXT, username TEXT NOT NULL, password VARCHAR(50) NOT NULL, centers int[], skills VARCHAR(255), availability VARCHAR(255), address VARCHAR(255), phone VARCHAR(50), email VARCHAR(50), education VARCHAR(255),  licenses VARCHAR(255),  emergencyname TEXT, emergencyphone VARCHAR(50), emergencyemail VARCHAR(50), emergencyaddress VARCHAR(255), dlfile BOOLEAN, ssfile BOOLEAN);",
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
)

// function addVolunteer(firstname, lastname, username, password, centers, skills, availablilty, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile){

//   var queryString = `INSERT INTO volunteer(
//     firstname, lastname, username, password, centers, skills, availablilty, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile
//     ) VALUES(`
//       firstname
//     `)`

//   pool.query(
//     queryString,
//     (err, res) => {
//       console.log(err, res);
//       pool.end();
//     }
//   )
// }

function addVolunteer(volunteer){
  var valuesArray = volunteer.map()
  console.log(valuesArray.join(','))
  // var queryString = `INSERT INTO volunteer(
  //   firstname, lastname, username, password, centers, skills, availablilty, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile
  //   ) VALUES(`
  //     firstname
  //   `)`

  // pool.query(
  //   queryString,
  //   (err, res) => {
  //     console.log(err, res);
  //     pool.end();
  //   }
  // )
}



// pool.query(
//   "INSERT INTO student(firstname, lastname, age, address, email)VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')",
//   (err, res) => {
//     console.log(err, res);
//     pool.end();
//   }
// );

// create a string object for Postgres SQL statement
var queryString = `INSERT INTO some_table(
id, str, int, bool
) VALUES(
'f73664b6ed53493eaffcc8ca68a41fda',
'this is a string value',
7777333,
true
)`;

// pool.query(queryString, (err, res) => {
//   if (err !== undefined) {
//     // log the error to console
//     console.log("Postgres INSERT error:", err);

//     // get the keys for the error
//     var keys = Object.keys(err);
//     console.log("\nkeys for Postgres error:", keys);

//     // get the error position of SQL string
//     console.log("Postgres error position:", err.position);
//   }

//   // check if the response is not 'undefined'
//   if (res !== undefined) {
//     // log the response to console
//     console.log("Postgres response:", res);

//     // get the keys for the response object
//     var keys = Object.keys(res);

//     // log the response keys to console
//     console.log("\nkeys type:", typeof keys);
//     console.log("keys for Postgres response:", keys);

//     if (res.rowCount > 0) {
//       console.log("# of records inserted:", res.rowCount);
//     } else {
//       console.log("No records were inserted.");
//     }
//   }
// });