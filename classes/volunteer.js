class Volunteer {
    constructor(firstname, lastname, username, password, centers, skills, availablilty, address, phone, email, education, licenses, emergencyname, emergencyphone, emergencyemail, emergencyaddress, dlfile, ssfile, approval) {
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
      this.approval = approval;
    }
    valuesOnly(){
       
      var returnStr = '\'' + this.firstname + '\',' +
      '\'' + this.lastname + '\',' +
      '\'' + this.username + '\',' +
      '\'' + this.password + '\',' +
      '\'{' + this.centers + '}\',' +
      '\'' + this.skills + '\',' +
      '\'' + this.availablilty + '\',' +
      '\'' + this.address + '\',' +
      '\'' + this.phone + '\',' +
      '\'' + this.email + '\',' +
      '\'' + this.education + '\',' +
      '\'' + this.licenses + '\',' +
      '\'' + this.emergencyname + '\',' +
      '\'' + this.emergencyphone + '\',' +
      '\'' + this.emergencyemail + '\',' +
      '\'' + this.emergencyaddress + '\',' +
      '\'' + this.dlfile + '\',' +
      '\'' + this.ssfile + '\',' + 
      '\'' + this.approval + '\'';
      return returnStr;
    }
}

module.exports.Volunteer = Volunteer;