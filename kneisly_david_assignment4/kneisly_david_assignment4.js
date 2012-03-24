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
   var phone = /^(\d{3})[- ](\d{3})[- ](\d{4})/;
      // Regex Explanation for phone:
      // ^ = Start of the string
      // (\d{3}) = 1st group.  Match digits 0-9, for 3 digits.
      // [- ] = Match either '-' or ' '.
      // (\d{3}) = 2nd group.  Match digits 0-9, for 3 digits.
      // [- ] = Match either '-' or ' '.
      // (\d{4})$ = 3rd group.  Match digits 0-9, for 4 digits.
   if (number.match(phone)) {
      return (phoneCheck = "Phone format for " + number + " is correct.");
   } else {
      return (phoneCheck = "Phone format for " + number + " is bad.");
   }
};

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

//Convert Separator
var changeSeparator = function(jobString,sep) {
   jobList = jobString.replace(/\,/g,sep);
      //Regex Explanation for jobList
      //\,/g = ',/' globally
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


/*
ASSIGNMENT FUNCTIONS

STRINGS

   Does a string follow a 123-456-7890 pattern like a phone number?

   Does a string follow anaaa@bbb.ccc pattern like an email address?

   Is the string a URL? (Does it start with http: or https:?)

   Title-case a string (split into words, then uppercase the first letter of each word)

   Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

NUMBERS
   
   Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

   Fuzzy-match a number: is the number above or below a number within a certain percent?

   Find the number of hours or days difference between two dates.

   Given a string version of a number such as "42", return the value as an actual Number, such as 42.

ARRAYS
   
   Find the smallest value in an array that is greater than a given number

   Find the total value of just the numbers in an array, even if some of the items are not numbers.

   Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

/*