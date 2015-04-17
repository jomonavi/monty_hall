//model monty hall game w/ javascript
//i have 3 doors(variables) that store goats or a prize
//i have to randomly select a door, hoping to get a prize
//then after i select a door, i have to have 2 branches in my code
	//*whether i change my door choice or i stick with my door choice
	//* 

//have 3 variables that contain strings "goat", "goat", "car"
//store them in an array
//randomly select one element in the array
//have 2 functions that calculate a switch strategy or a don't switch strategy
	// have a for loop that counts to 1000
	//randomly select 1 element in array
	//based on switch strategy or not, calculate probabilities
//store probabilities in variables that's console logged to screen

var door1 = "goat", door2 = "goat", door3 = "prize";
var doorChoice = [door1, door2, door3];

// function removeUserElement(arr) {
// 	arr.splice(idx, 1);
// }

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function noSwitchGame(array) {
	var rightGuess = 0;
	var total = 0;
	for (var i = 0; i < 1000; i++) {
		shuffledArray = shuffle(array);
		var userChoice = Math.floor(Math.random() * 3);
		// var hostChoice;
		
		// for (var j = 0; i < array; j++) {
		// 	if (array[j] != "prize" && j != userChoice) {
		// 		hostChoice = j;
		// 	}
		// }

		if (array[userChoice] === "prize") {
			rightGuess ++;
			total ++;
		} else {
			total ++;
		}

	};
	console.log(rightGuess / total);
}

function switchGame(array) {
	var rightGuess = 0;
	var total = 0;
	for (var i = 0; i < 1000; i++) {
		shuffledArray = shuffle(array);
		var userChoice1 = Math.floor(Math.random() * 3);
		var hostChoice;
		var userChoice2;
		
		for (var j = 0; j < array.length; j++) {
			if (array[j] != "prize" && j != userChoice1) {
				hostChoice = j;
			}
		}

		for (var idx = 0; idx < array.length; idx++) {
			if (idx != userChoice1 && idx != hostChoice) {
				userChoice2 = idx;
			}
		}

		if (array[userChoice2] === "prize") {
			rightGuess ++;
			total ++;
		} else {
			total ++;
		}

	};
	console.log(rightGuess / total);
}


















