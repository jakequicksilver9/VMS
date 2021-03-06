const { Pool, Client } = require("pg");
const { mainController } = require("../mainController");
const opportunity = require("../classes/opportunity");

const pool = new Pool({
  user: "postgres",
  host: "database-2.cv34ux64nhtc.us-east-1.rds.amazonaws.com",
  database: "postgres",
  password: "password",
  port: "5432"
})

async function addVolunteer(volunteer){
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

async function editVolunteer(volunteer, id){
  const client = await pool.connect()
  var queryString = `UPDATE volunteer SET
    firstname = '` +  volunteer.firstname + `',
    lastname = '` +  volunteer.lastname + `',
    username = '` +  volunteer.username + `',
    password = '` +  volunteer.password + `',
    centers = '{` +  volunteer.centers + `}',
    skills = '` +  volunteer.skills + `',
    availability = '` +  volunteer.availablilty + `',
    address = '` +  volunteer.address + `',
    phone = '` +  volunteer.phone + `',
    email = '` +  volunteer.email + `',
    education = '` +  volunteer.education + `',
    licenses = '` +  volunteer.licenses + `',
    emergencyname = '` +  volunteer.emergencyname + `',
    emergencyphone = '` +  volunteer.emergencyphone + `',
    emergencyemail = '` +  volunteer.emergencyemail + `',
    emergencyaddress = '` +  volunteer.emergencyaddress + `',
    dlfile = '` +  volunteer.dlfile + `',
    ssfile = '` +  volunteer.ssfile + `',
    approval = '` +  volunteer.approval + `'
    WHERE ID = ` + id + ';';
    console.log(queryString)
    client.query(
      queryString,
      (err, res) => {
        console.log(err, res);
      }
    )
    client.release()
}

async function editOpportunity(opportunity, id){
  const client = await pool.connect()
  var queryString = `UPDATE opportunity SET
    name = '` +  opportunity.name + `',
    address = '` +  opportunity.address + `',
    phonenumber = '` +  opportunity.phonenumber + `',
    email = '` +  opportunity.email + `'
    WHERE ID = ` + id + ';';
    console.log(queryString)
    client.query(
      queryString,
      (err, res) => {
        console.log(err, res);
      }
    )
    client.release()
}

async function addOpportunity(opportunity){
  // var valuesArray = volunteer.valuesOnly()
  console.log(opportunity.valuesOnly())
  var valuesString = opportunity.valuesOnly()
  const client = await pool.connect()
  var queryString = `INSERT INTO opportunity(
    name, email, address, phonenumber
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

async function deleteOpportunity(id){
  var queryString = 'DELETE FROM opportunity WHERE id =' + id + ';'
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

module.exports = {pool, addVolunteer, deleteVolunteer, editVolunteer, addOpportunity, deleteOpportunity, editOpportunity}

