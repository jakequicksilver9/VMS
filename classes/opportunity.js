class Opportunity {
    constructor(name, address, phonenumber, email) {
      this.name = name;
      this.address = address;
      this.phonenumber = phonenumber;
      this.email = email;
    }
    valuesOnly(){
       
      var returnStr = '\'' + this.name + '\',' +
      '\'' + this.address + '\',' +
      '\'' + this.phonenumber + '\',' +
      '\'' + this.email + '\'' ;
      return returnStr;
    }
}

function arrayToObject(arr) {
  var obj = new Opportunity(arr[1],arr[2],arr[3],arr[4])
  return obj;
}

function requestToObject(request) {
  var obj = new Opportunity(request.body.name, request.body.email, request.body.address, request.body.phonenumber)
  return obj;
}

// module.exports.Opportunity = Opportunity;
module.exports = {Opportunity,arrayToObject, requestToObject}