// SDI 1203
// Week 2 Activity: Project 2
// David Tyler Kneisly
// Time Travel


//Declare
var	myYear = 1985,
	alternateYear = 1955,
	maxSpeed = 88,
	timeMachine = "Delorean",
	timeMachineSystems = ["Time circuits on.","Flux Capacitor...fluxxing.","Engine running."];
	/*timeParadox = "" //review later--might return "true/false"*/
	;


//Initial Output
//some comment about 88mph and 1.21 gigawatts, but use returned values for the 88mph part


//PROCEDURE
//Travel to some other time
var 	timeTravel = function(start,destination) {
	var 	yearsTraveled = Math.abs(start - destination);
	if 	(yearsTraveled != 0) {
		console.log("I've violated the laws of physics!");
		console.log("I time-traveled " + yearsTraveled + " years from " + start + " to the year " + destination + ".");
		if 	(destination < start) {
			console.log("Great scott!  I've traveled through time to the past!");
			console.log(" ");
		} else {
			console.log("I've traveled through time to the future!  This is heavy!");
			console.log(" ");
		}
	} else {
		console.log("Well, it's a " + timeMachine + ", so of course I didn't go anywhere.  But I did get there in style.");
	}
}; //timeTravel

//BOOLEAN
//If time travel is true, and "time revision" has happened, and "time correction" hasn't happened, then Paradox is true.  Otherwise, if at least one of the above conditions isn't met, then Paradox is false.
var 	avoidParadox = function(start,destination) {
	var 	yearsTraveled = Math.abs(start - destination),
		timeParadox = " ";
		future = " ";
	if 	(yearsTraveled != 0) {
		timeParadox = true;
		console.log("By being here, I have undone the already-did!  I have created a paradox!");
		console.log(" ");
		if 	(destination < start) {
			future = false;
		} else if (destination > start) {
			future = true;
		}
	} else {
		timeParadox = false;
		console.log("Guess there's no such thing as time travel.  Doc Brown, you wacky guy!");
		console.log(" ");
	};
	paradox = timeParadox,
	backToTheFuture = future;
	return 	paradox,
		backToTheFuture;
};//avoidParadox

//STRING
//Fix the timeline
var getParadox = function(timeline,)

//ARRAY
//Get home to my own timeline
var 	getHome = function(howFast,systems) {
	console.log("A quick systems check, and I'll be ready to get to my own time.");
	for 	(var i = 0; i < (systems.length ); i++) {
		system = systems[i];
		console.log("System number " + (i + 1) + ".  " + system);
	};
	sayHowFast = "I'm going to need to get this baby up to " + howFast + " miles per hour.";
	console.log("System number " + (i + 1) + ".  Speed.  " + sayHowFast);
	console.log(" ");
	systems[i] = sayHowFast,
	newSystems = systems;
	return 	newSystems;
};

//NUMBER
//Get the time machine up to 88 miles per hour
var accelerateTimeMachine = function(speed) {
	var 	mph = 0,
		seconds = 0,
		timeLimit = 10;
	console.log("I've got to get up to speed in " + timeLimit + " seconds.  Put the pedal to the metal!");
	while (mph < speed) {
		seconds ++;
		console.log("I am at " + mph + " miles per hour.");
		mph = (mph + 11);
	}
	if (seconds < timeLimit) {
		console.log("I have reached " + mph + " miles per hour in " + seconds + " seconds.");
		console.log("Come on, space-time continuum, let's see what you've got!!!");
		console.log(" ");
	} else {
		console.log("It took too long to accelerate!  I've missed my window!");
	}
	secondsCount = seconds;
	return 	secondsCount;			
}; //accelerateTimeMachine

//OUTPUT
var 	parentsNeverMeet = "",  //update later.  Should be an array that is returned.
	westernRomance = "",  //update later.  Should be an array that is returned.
	pleasureParadise = "", //update later.  Should be an array that is returned.
	sayParadox = "Mom and dad never met each other, and I now...I'm...fading...from...photos...", //Will be returned string concatenation of timeline+paradoxOutput+timeCorrection.  Multiple output lines.
	sayResolution = "", // example string: " but I got them to kiss at the Under the Sea Ball"
	timeResolution = true;
	//timeParadox = [alternateYear, sayParadox, timeResolution, sayResolution];


//Procedure Output
timeTravel(myYear,alternateYear);
//Boolean Output
avoidParadox(myYear,alternateYear);
var 	output = function(paradox) {
	if 	(paradox === true) {
		//Array Output
		getHome(maxSpeed,timeMachineSystems);
		//Number Output
		accelerateTimeMachine(maxSpeed);
	} else {
		return;
	}
};
output(paradox);
console.log(backToTheFuture);