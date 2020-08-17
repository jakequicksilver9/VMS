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
      var returnStr = 
      '\'' + this.firstname + '\',' +
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

function arrayToObject(arr) {
  var obj = new Volunteer(arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7],arr[8],arr[9],arr[10],arr[11],arr[12],arr[13],arr[14],arr[15],arr[16],arr[17],arr[18],arr[19])
  return obj;
}

function requestToObject(request) {
  var obj = new Volunteer(request.body.firstname, request.body.lastname, request.body.username, request.body.password, request.body.centers, request.body.skills, request.body.availability, request.body.address, request.body.phone, request.body.email, request.body.education, request.body.licenses, request.body.emergencyname,request.body.emergencyphone, request.body.emergencyemail, request.body.emergencyaddress, request.body.dlfile, request.body.ssfile, request.body.approval)
  return obj;
}

module.exports = {Volunteer,arrayToObject, requestToObject}