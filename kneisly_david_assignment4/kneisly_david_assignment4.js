// SDI 1203
// Week 4 Activity: Project 4
// David Tyler Kneisly
// Building Libraries

//GLOBAL VARIABLES

var phoneNumber = "864-810-0318";
var emailAddress = "mostamazingpersonever@gmail.com";
var website = "https://www.facebook.com";
var movieTitle = "back to the future";
var jobs = "Programer, Analyst, Consultant, Secret Agent";


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
var makeTitle = function(string) {
   cnvrt = function() {
      return arguments[0].toUpperCase();
   }
   newTitle = string.toLowerCase().replace(/\b[a-z]/g, cnvrt);
   return newTitle;
};

//Convert Separator
var changeSeparator = function(jobString) {
   jobList = jobString.replace(/\,/g," /");
   return jobList;
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

//Title-case
makeTitle(movieTitle);
console.log(newTitle);

//Convert Separators
changeSeparator(jobs);
console.log(jobList);


/*

STRINGS
   * Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

NUMBERS
   * Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
   * Fuzzy-match a number: is the number above or below a number within a certain percent?
   * Find the number of hours or days difference between two dates.
   * Given a string version of a number such as "42", return the value as an actual Number, such as 42.

ARRAYS
   * Find the smallest value in an array that is greater than a given number
   * Find the total value of just the numbers in an array, even if some of the items are not numbers.
   * Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
*/