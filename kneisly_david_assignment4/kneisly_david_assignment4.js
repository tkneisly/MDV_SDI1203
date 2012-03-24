// SDI 1203
// Week 4 Activity: Project 4
// David Tyler Kneisly
// Building Libraries

//GLOBAL VARIABLES

var phoneNumber = "864-867-5309";
var emailAddress = "tommy2tones@gmail.com";
var website = "https://www.facebook.com";
var movieTitle = "back to the future";
var jobs = "Programer, Analyst, Consultant, Secret Agent";
var separator = " /";
var gigawatts = 1.212934;


//STRING
//Does a string follow a pattern like a phone number?
var checkPhone = function(number) {
   phoneCheck = "";
   var phone = /^(\d{3})[- ](\d{3})[- ](\d{4})$/;
   if (number.match(phone)) {
      return (phoneCheck = "Phone format for " + number + " is correct.");
   } else {
      return (phoneCheck = "Phone format for " + number + " is bad.");
   }
};

//Does a string follow a pattern like an email address?
var checkEmail = function(address) {
   emailCheck = "";
   var email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
   if (email.test(address)) {
      return (emailCheck = "The email address, '" + address + "', is valid.");
   } else {
      return (emailCheck = "The email address, '" + address + "', is NOT valid.");
   }
};

//Is a string a URL (with either HTTPS or HTTP)?
var checkURL = function(url) {
   urlCheck = "";
   var isSecure = "";
   var siteSecure = /(https)/;
   var isSite = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
   if (isSite.test(url)) {
      if  (siteSecure.test(url)) {
         isSecure = "is a secure site.";
      } else {
         isSecure = "is not a secure site.";
      }
      return (urlCheck = "The web address, '" + url + "', is valid and " + isSecure);
   } else {
      return (urlCheck = "The web address, '" + url + "', is missing characters or is not a valid address.");
   }
};

//Title-case a String
var makeTitle = function(title) {
   titleCase = function() {
      return arguments[0].toUpperCase();
   }
   newTitle = title.toLowerCase().replace(/\b[a-z]/g, titleCase);
   return newTitle;
};

//Convert Separator
var changeSeparator = function(jobString,sep) {
   jobList = jobString.replace(/\,/g,sep);
   return jobList;
};


//NUMBERS
//Set Decimal Places
var setDecimal = function(floatNum) {
   newNumber = floatNum.toFixed(2);
   return newNumber;
};


//OUTPUT
//String: Phone Number Format
checkPhone(phoneNumber);
console.log(phoneCheck);

//String: Email Format
checkEmail(emailAddress);
console.log(emailCheck);

//String: Check URL
checkURL(website);
console.log(urlCheck);

//String: Title-case
makeTitle(movieTitle);
console.log(newTitle);

//String: Convert Separators
changeSeparator(jobs,separator);
console.log(jobList);

//Number: Set Decimal Places
setDecimal(gigawatts);
console.log(newNumber);
