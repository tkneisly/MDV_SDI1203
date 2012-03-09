// SDI 1203
// Week 2 Activity: Project 2
// David Tyler Kneisly
// Time Travel


//Declare
var	timelineNumber = 1,
	myYear = 1985,
	timelines = [1985,1885,1955,2015],
	alternateYear = timelines[timelineNumber],
	timeMachine = "Delorean",
	maxSpeed = 88,
	possibleParadoxes = [0,1,2],
	timeMachineSystems = ["Time circuits on.","Flux Capacitor...fluxxing.","Engine running."];
	;


//Initial Output
console.log("My good friend, Doc, says he's invented a time machine.");
console.log("So, I do what any rational person would do.");
console.log("I hop in and give it a try!");
console.log("So...will I time travel?");
console.log(" ");


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
	if 	(yearsTraveled != 0) {
		timeParadox = true;
		console.log("By being here, I have undone the already-did!  I have created a paradox!");
	} else {
		timeParadox = false;
		console.log("Guess there's no such thing as time travel.  Doc Brown, you wacky guy!");
	};
	isParadox = timeParadox;
	return 	isParadox;
}; //avoidParadox

//ARRAY (Not part of the original assignment)
//What's the paradox?
var getParadox = function(timeline) {
	var 	timelineProblem = "";
	if (timeline === 1955) {
		timelineProblem = "Mom and dad never met each other, and I now...I'm...fading...from...photos...";
	} else if (timeline === 1885) {
		timelineProblem = "Doc's in trouble over a matter of $80!";
	} else if (timeline === 2015) {
		timelineProblem = "Happily ever after is incredibly unhappy!";
	}
	sayParadox = timelineProblem;
	return 	sayParadox;
}; //getParadox

//STRING
//Fix the timeline
var getSolution = function(timeline,paradox) {
	var 	solution = "";
	if (timeline === 1955) {
		solution = ", but I got them to kiss at the Under the Sea dance, so everything's fine!";
	} else if (timeline === 1885) {
		solution = "  But we're pushing ourselves out of the old west via steam engine!  Makes sense!";
	} else if (timeline === 2015) {
		solution = "  Gotta keep the kids outta jail, while not running into future me!";
	}
	saySolution = paradox + solution;
	return 	saySolution;
}; //getSolution

//ARRAY
//Get home to my own timeline
var 	getHome = function(howFast,systems,solution) {
	console.log(solution);
	console.log(" ");
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
}; //getHome

//NUMBER
//Get the time machine up to 88 miles per hour
var accelerateTimeMachine = function(speed) {
	var 	mph = 0,
		seconds = 0,
		timeLimit = 10;
	console.log("I've got to get up to speed in under " + timeLimit + " seconds.  Put the pedal to the metal!");
	while (mph < speed) {
		seconds ++;
		console.log("I am at " + mph + " miles per hour at " + seconds + " seconds.");
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
//Procedure Output
timeTravel(myYear,alternateYear);
//Boolean Output
avoidParadox(myYear,alternateYear);
//Other Output
var 	output = function(isParadox) {
	if 	(isParadox === true) {
		//Array Output (non-mapped)
		getParadox(timelines[timelineNumber]);
		//String Output
		getSolution(timelines[timelineNumber],sayParadox);
		//Array Output
		getHome(maxSpeed,timeMachineSystems,saySolution);
		//Number Output
		accelerateTimeMachine(maxSpeed);
	} else {
		return;
	}
}; //output
output(isParadox);