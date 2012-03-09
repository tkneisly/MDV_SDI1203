// SDI 1203
// Week 2 Activity: Project 2
// David Tyler Kneisly
// Time Travel


//Declare
var	myYear = 1985,
	alternateYear = 1955,
	maxSpeed = 88,
	myLocation = "Hill Valley",
	timeMachine = "Delorean",
	timeMachineSystems = ["Time circuits on.","Flux Capacitor...fluxxing.","Engine running."];
	/*timeParadox = "" //review later--might return "true/false"*/
	;


//Initial Output
//some comment about 88mph and 1.21 gigawatts, but use returned values for the 88mph part


//PROCEDURE
//Travel to some other time
var timeTravel = function(start,destination) {
	yearsTraveled = Math.abs(myYear - alternateYear);
	if (yearsTraveled != 0) {
		console.log("I've violated the laws of physics!");
		console.log("I've travelled " + yearsTraveled + " years from " + myYear + " to the year " + alternateYear + ".");
		if (alternateYear < myYear) {
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
		console.log(" ");
	}
	return timeRevision;
};//avoidParadox

//STRING
//Fix the timeline
//Use "timeRevision" returned value to output what the paradox is

//ARRAY
//Get home to my own timeline
var getHome = function(howFast,systems) {
	readyToTravel = "",
	newSystems = [];
	console.log("A quick systems check, and I'll be ready to get to my own time.");
	for (var i = 0; i < (systems.length ); i++) {
		system = systems[i];
		console.log("System number " + (i + 1) + ".  " + system);
	}
	systems[i] = howFast,
	newSystems = systems;
	console.log("System number " + (i + 1) + ".  Speed.  I'm going to need to get this thing up to " + howFast + " miles per hour.");
	console.log(" ");
	return newSystems;
};

//NUMBER
//Get the time machine up to 88 miles per hour
var accelerateTimeMachine = function(speed) {
	mph = 0;
	console.log("Put the pedal to the metal!");
	while (mph < speed) {
		console.log("I am at " + mph + " miles per hour.");
		mph = (mph + 11);
	};
	if (mph === speed) {
		console.log("I have reached " + mph + " miles per hour.");
		console.log("Come on, space-time continuum, let's see what you've got!!!");
		console.log(" ");
	} else {
		console.log("I was waaaay off!  I'll never get out of this timeline!");
		console.log(" ");
	}
	return mph;			
}; //accelerateTimeMachine

//OUTPUT
var 	parentsNeverMeet = "",  //update later.  Should be an array that is returned.
	westernRomance = "",  //update later.  Should be an array that is returned.
	pleasureParadise = "", //update later.  Should be an array that is returned.
	sayParadox = "Mom and dad never met, and I now...I'm...fading...from...photos...", //Will be returned string concatenation of timeline+paradoxOutput+timeCorrection.  Multiple output lines.
	sayResolution = "", // example string: " but I got them to kiss at the Under the Sea Ball"
	timeResolution = true,
	timeParadox = [alternateYear, sayParadox, timeResolution, sayResolution],
	yearsTraveled = 30; //remove later


//Procedure Output
timeTravel(yearsTraveled);
//Boolean Output
avoidParadox(yearsTraveled,timeParadox);
//Array Output
getHome(maxSpeed,timeMachineSystems);
//Number Output
accelerateTimeMachine(newSystems[3]); 








//String Output
