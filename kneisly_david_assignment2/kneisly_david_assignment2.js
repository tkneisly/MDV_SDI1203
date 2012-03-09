// SDI 1203
// Week 2 Activity: Project 2
// David Tyler Kneisly
// Time Travel


//Declare
var	myYear = 1985,
	myLocation = "Hill Valley",
	yearsTraveled = "", //review later--should have date difference returned
	timeMachine = "Delorean",
	timeMachineSystems = ["Time circuits on.","Flux Capacitor...fluxxing.","Engine running."],
	timeMachineVersion = [1985,2015,1955,1885]
	/*timeParadox = "" //review later--might return "true/false"*/
	;


//Initial Output


//PROCEDURE
//Travel to some other time
var timeTravel = function(time) {
	if (yearsTraveled != 0) {
		console.log("Only 88 mph and 1.21 gigawatts later, and I've violated the laws of physics!");
		console.log("I've travelled " + time + " years from " + myYear + " to the year " + timeline + ".");
		if (timeline < myYear) {
			console.log("Great scott!  I've travelled through time to the past!");
			console.log(" ");
		} else {
			console.log("I've travelled through time to the future!  This is heavy!");
			console.log(" ");
		}
	} else {
		console.log("Well, it's a " + timeMachine + ", so of course it didn't go anywhere.  But it got me there in style.");
		console.log(" ");
	}
}; //timeTravel

//BOOLEAN
//Don't mess up the timeline
//If time travel is true, and "time revision" has happened, and "time correction" hasn't happened, then Paradox is true.  Otherwise, if at least one of the above conditions isn't met, then Paradox is false.
var avoidParadox = function(year, paradox) {
	timeRevision = "";
	if (year != 0) {
		timeRevision = true;
	} else {
		timeRevision = false;
	}
	if (timeRevision === true) {
		console.log("By being here, I have undone the already-did!  I have created a paradox!");
		console.log(paradox[1]);
		console.log(" ");
	} else {
		console.log("No paradox... Yet.");
	}
	return timeRevision;
};//avoidParadox

//NUMBER
//Fix the timeline that I messed up

//STRING
//Fix the time machine, because it's a Delorean

//ARRAY
//Get home to my own timeline

//OUTPUT
var 	parentsNeverMeet = "",  //update later.  Should be an array that is returned.
	westernRomance = "",  //update later.  Should be an array that is returned.
	pleasureParadise = "", //update later.  Should be an array that is returned.
	timeline = 1955, //remove later
	sayParadox = "Mom and dad never met, and I now...I'm...fading...from...photos...", //Will be returned string concatenation of timeline+paradoxOutput+timeCorrection.  Multiple output lines.
	sayResolution = "", // example string: " but I got them to kiss at the Under the Sea Ball"
	timeResolution = true,
	timeParadox = [timeline, sayParadox, timeResolution, sayResolution],
	yearsTraveled = 30; //remove later

timeTravel(yearsTraveled); //move later
avoidParadox(yearsTraveled,timeParadox);

//Procedure Output

//Number Output

//Spacer

//Boolean Output

//Spacer

//Array Output

//String Output


