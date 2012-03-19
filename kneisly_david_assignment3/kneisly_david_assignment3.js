// SDI 1203
// Week 3 Activity: Project 3
// David Tyler Kneisly
// Too Many Deloreans!

// Define the Delorean


// Global Variables
var goodPrevails = true,
	person = "Biff Tannen",
	timeline = 0,
	destinations = [],
	outcome = " ",
	finalDate = 0
;


var whichDelorean = {
	originalTime: 1985,  //Number Property
	type: "Delorean", //String
	powerSource: [
		"Plutonium",
		"Lightning",
		"Mr. Fusion"
	], //Array
	timelines: [
		json.timeline[1],
		json.timeline[2],
		json.timeline[3],
		json.timeline[4]
	],
	humanInterface: driver = {
		name: " ",
		good: true,
		year: 0 
	}, // Object Property 
	visitTimelines: function(timeline,destinations) {
		for (var i = 0; timeline < json.timeline.length; i++) {
			console.log(json.timeline[i].year);
		}
	}, // Method: Function
	changeDriver: function(time,driver) {
		if ((time.year === 1985) && (time.name === "Original")) {
			console.loge(json.driver[1]);
		} else if ((time.year === 1985) && (time.name === "Alternate")) {
			console.log(json.driver[1]);
		};
		 
	}

};

//for (var key in whichDelorean) {console.log("Key: " + key + ".  Value: ", whichDelorean[key])};




console.log(json.timeline[1].name,json.timeline[1].year);
whichDelorean.visitTimelines(timeline,destinations);
console.log(whichDelorean.timelines[1].name);
whichDelorean.changeDriver(json.timeline[1],json.driver[1]);


// TERMINATORS
// Start
// Finish


// CONNECTOR
// Back


// INTERNAL STORAGE
// Global Variables

// Local Variables

// Returned Values

// Property:  Boolean

// Property:  Array (powerSource) (check)

// Property:  Number (origin) (check)

// Property:  String (type) (check)

// Property:  Object (human.driver) (check)



// DECISIONS
// Conditional

// Nested Conditional



// PROCESSES
// Nested Loop

// While Loop

// For Loop  (visitTimelines);

// Math (possibilities:  return(timelines ++); )



// PREDEFINED PROCESSES
// Method:  Procedure

// Method:  Function (visitTimelines)

// Method:  Accessor (A function (or method) that get you something out of the object)

// Method:  Mutator (A function (method) that changes something within the object)



// DOCUMENTS
// JSON Data  (Should contain the data to be entered into the human.driver object)



// DATA
// Argument:  Boolean

// Argument:  Array

// Argument:  Number

// Argumnet:  String

// Argument:  Object (visitTimeline - json)


// RETURNS
// Boolean

// Array

// Number

// String

// Object


// DISPLAY
// Output

