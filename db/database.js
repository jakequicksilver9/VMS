const { Pool, Client } = require("pg");
const { mainController } = require("../mainController");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "pass",
  port: "5432"
})

async function addVolunteer(volunteer){
  // var valuesArray = volunteer.valuesOnly()
  console.log(volunteer.valuesOnly())
  var valuesString = volunteer.valuesOnly()
  const client = await pool.connect()
  var queryString = `INSERT INTO volunteer(
    firstname, lastname, username, password, centers, skills, availability, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile, approval
    ) VALUES(` +valuesString+ `)`;
  console.log(queryString)
    client.query(
      queryString,
      (err, res) => {
        console.log(err, res);
      }
    )
    client.release()
}

async function deleteVolunteer(id){

  var queryString = 'DELETE FROM volunteer WHERE id =' + id + ';'
  console.log(queryString)
  const client = await pool.connect()
  client.query(
    queryString,
    (err, res) => {
      console.log(err, res);
    }
  )
  client.release()
    
}



module.exports = {addVolunteer, pool, deleteVolunteer}
