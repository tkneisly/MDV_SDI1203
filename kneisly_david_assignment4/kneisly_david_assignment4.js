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
var originYear = 1985;
var arrivalYear = 1889;
var veryImportantDate = "11/5";
var wantToTravel = "100 years";
var errorMargin = "5 years";
var trilogyEpisode = "3";
var timelines = [1955,1985,2015];


//STRING
var checkString = function() {
   var checkPhone = function(string) {
      var regPhone = /^(\d{3})[- ](\d{3})[- ](\d{4})/;
         // Regex Explanation for phone:
         // ^ = Start of the string
         // (\d{3}) = 1st group.  Match digits 0-9, for 3 digits.
         // [- ] = Match either '-' or ' '.
         // (\d{3}) = 2nd group.  Match digits 0-9, for 3 digits.
         // [- ] = Match either '-' or ' '.
         // (\d{4})$ = 3rd group.  Match digits 0-9, for 4 digits.
      if (string.match(regPhone)) {
         console.log("Phone format for " + string + " is correct.");
      } else {
         console.log("Phone format for " + string + " is bad.");
      }
   };
   return {
      "phone": checkPhone
   }
};
var phoneChecker = checkString(phoneNumber);
console.log(phoneChecker.phone(phoneNumber));
//Does a string follow a pattern like a phone number?
// var checkPhone = function(number) {
//    phoneCheck = "";
//    var phone = /^(\d{3})[- ](\d{3})[- ](\d{4})/;
//       // Regex Explanation for phone:
//       // ^ = Start of the string
//       // (\d{3}) = 1st group.  Match digits 0-9, for 3 digits.
//       // [- ] = Match either '-' or ' '.
//       // (\d{3}) = 2nd group.  Match digits 0-9, for 3 digits.
//       // [- ] = Match either '-' or ' '.
//       // (\d{4})$ = 3rd group.  Match digits 0-9, for 4 digits.
//    if (number.match(phone)) {
//       return (phoneCheck = "Phone format for " + number + " is correct.");
//    } else {
//       return (phoneCheck = "Phone format for " + number + " is bad.");
//    }
// };

//Does a string follow a pattern like an email address?
var checkEmail = function(address) {
   emailCheck = "";
   var email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+/;
      //Regex Explanation for email:
      // ^ = Start of the string
      // ([a-zA-Z0-9_.-])+ = 1st group.  Match any character in 'a'-'z', 'A'-'Z', 0-9, '_', '.', and '-'.
      // @ = '@'
      // ([a-zA-Z0-9_.-])+ = 2nd group.  Match any character in 'a'-'z', 'A'-'Z', 0-9, '_', '.', and '-'.
      // . = '.'
      // ([a-zA-Z])+ = 3rd group.  Match any character in 'a'-'z', or 'A'-'Z'.
      // ([a-zA-Z])+ = 4th group.  Match any character in 'a'-'z', or 'A'-'Z'.
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
   var isSite = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@\-\/]))?/;
      // Regex Explanation of url
      // /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      // // ([a-zA-Z0-9_.-])+ = 1st group.  Match any character in 'a'-'z', 'A'-'Z', 0-9, '_', '.', and '-'.
      // (http|https) = 1st group.  Looks for 'http' OR 'https'.
      // :\/\/ = '://'
      // (\w+:{0,1}\w*@)? = 2nd group.  Only last repition will be stored.  See breakdown:
      //    \w+ = Word characters 'a'-'z', 'A'-'Z', 0-9, and '_', matched 1 or more times.
      //    :{0,1} = Matches ':' 0-1 times (as most as possible)
      //    \w* = Word characters 'a'-'z', 'A'-'Z', 0-9, and '_', matched 0 or more times.
      //    @ = '@'
      // (\S+) = 3rd group.  Matches non-whitespace 1 or more times.
      // (:[0-9]+)? = 4th group.  Only last repition will be stored.  See breakdown:
      //    : = ':'
      //    [0-9]+ = Matches any of 0-9, 1 or more times.
      // (\/|\/([\w#!:.?+=&%@!\-\/]))? = 5th and 6th groups.  Only last repition of 5th group will be stored.  See breakdown:
      //    5th group:
      //    \/|\/ = '/' OR '/'
      //       6th group:
      //       [\w#!:.?+=&%@!\-/] = Any word characters ('a'-'z', 'A'-'Z', 0-9, and '_') and any of these characters (#, !, :, ., ?, +, =, &, %, @, -, /).   
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

//Convert a Separator
var changeSeparator = function(jobString,sep) {
   jobList = jobString.replace(/\,/g,sep);
      //Regex Explanation for jobList
      //\,/g =Match ',/' globally
   return jobList;
};


//NUMBERS
//Set Decimal Places
var setDecimal = function(floatNum) {
   newNumber = floatNum.toFixed(2);
   return newNumber;
};

//Fuzzy-match a Number, above or below another number, within a certain percent range
var findTolerance = function(base,fault,target,margin){
   var percent = 100,
   withinTolerance = "",
   tolerance = "",
   a = base,
   b = fault;
   makeNumbers = function() {
      m = (Math.abs(margin.match(/\d+/)));
         //Regex Explanation:
         //\d+ = Match all digits
      t = (Math.abs(target.match(/\d+/)));
         //Regex Explanation:
         //\d+ = Match all digits
      x = (Math.abs((a-b) / t) * percent),
      z = (Math.abs(percent - x).toFixed(0));
      return m,t,x,z;
   }; // Number Function #4:  Convert String Into Number
   makeNumbers(target,margin);
   if ((Math.abs(percent-x)) <= m) {
      withinTolerance = true;
      tolerance = "The arrival year is " + z + "% off, but still " + (m-z) + "% within the margin of error.";
   } else {
      withinTolerance = false;
      tolerance = "The arrival year is " + z + "% off, and is " + (z-m) + "% outside the margin of error.";
   };
   return sayTolerance = tolerance,
   declareTolerance = withinTolerance;
};

//Find the Number of Days Between Two Dates
var getDaysBetween = function(date,origin,arrival) {
   var originDate = (date + "/" + origin),
   arrivalDate = (date + "/" + arrival),
   date1 = new Date(originDate),
   date2 = new Date(arrivalDate);
   daysBetweenDates = function(date1,date2) {
      var oneDay = 1000 * 60 * 60 * 24;
      var date1_ms = date1.getTime(date1);
      var date2_ms = date2.getTime(date2);
      var difference_ms = Math.abs(date1_ms - date2_ms);
      daysBetween = Math.round(difference_ms/oneDay);
      return daysBetween;
   }
   daysBetweenDates(date1,date2);
   return daysBetween;
}; //Citation: http://www.mcfedries.com/javascript/daysbetween.asp


//OUTPUT
//String: Phone Number Format
// checkPhone(phoneNumber);
// console.log(phoneCheck);
// var test = checkString();
// var phoneChecker = checkPhone.phone(phoneNumber);
// console.log(phoneChecker);

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

//Number: Fuzzy-match
findTolerance(originYear,arrivalYear,wantToTravel,errorMargin);
console.log(declareTolerance);
console.log(sayTolerance);

//Number: Difference Between Two Dates
getDaysBetween(veryImportantDate,originYear,arrivalYear);
console.log(daysBetween);


/*
ASSIGNMENT FUNCTIONS

STRINGS

NUMBERS

ARRAYS
   
   Find the smallest value in an array that is greater than a given number

   Find the total value of just the numbers in an array, even if some of the items are not numbers.

   Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

*/