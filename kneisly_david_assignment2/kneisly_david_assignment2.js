// SDI 1203
// Week 2 Activity: Project 2
// David Tyler Kneisly
// Time Travel


//Declare
var	myYear = 1985,
	alternateYear = 1955,
	myLocation = "Hill Valley",
	yearsTraveled = "", //review later--should have date difference returned
	timeMachine = "Delorean",
	timeMachineSystems = ["Time circuits on.","Flux Capacitor...fluxxing.","Engine running.",88];
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

//STRING
//Fix the timeline

//ARRAY
//Get home to my own timeline
var getHome = function(timeline,systems) {
	readyToTravel = "";
	console.log("A quick systems check, and I'll be ready to get to my own time.");
	for (var i = 0; i < systems.length; i++) {
		system = systems[i];
		if (system != 3) {
			console.log("System number " + i++ + "." + system);
		} else {
			console.log("We're ready to get this baby up to " + system + " miles per hour!");
		}
	}
};

//NUMBER
//Get the time machine up to 88 miles per hour
var accelerateTimeMachine = function(maxSpeed) {
	speed = 0;
	console.log("I must get to exactly " + maxSpeed + " miles per hour before I can time travel!");
	console.log("Put the pedal to the metal!");
	var speedometer = maxSpeed;
	while (speed < maxSpeed) {
		console.log("I am at " + speed + " miles per hour.");
		speed = (speed + 11);
	};
	if (maxSpeed === speed) {
		console.log("I have reached " + speed + " miles per hour.");
		console.log("Come on, space-time continuum, let's see what you've got!!!");
		console.log(" ");
	} else {
		console.log("I was waaaay off!  I'll never get out of this timeline!");
		console.log(" ");
	}
	return speed;			
}; //accelerateTimeMachine

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
accelerateTimeMachine(timeMachineSystems[3]); 
getHome(alternateYear,timeMachineSystems);

console.log(speed);
console.log(timeRevision);


//Procedure Output

//Number Output

//Spacer

//Boolean Output

//Spacer

//Array Output

//String Output


