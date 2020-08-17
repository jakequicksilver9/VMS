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

module.exports.Opportunity = Opportunity;