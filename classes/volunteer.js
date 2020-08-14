class Volunteer {
    constructor(firstname, lastname, username, password, centers, skills, availablilty, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.password = password;
      this.centers = centers;
      this.skills = skills;
      this.availablilty = availablilty;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.education = education;
      this.licenses = licenses;
      this.emergencyname = emergencyname;
      this.emergencyphone = emergencyphone;
      this.emergencyemail = emergencyemail;
      this.emergencyaddress = emergencyaddress;
      this.dlfile = dlfile;
      this.ssfile = ssfile;
    }
}

module.exports.Volunteer = Volunteer;