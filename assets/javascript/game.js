
var goalOptions = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,61,];	//An array of possible climb lengths
var moveOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var moveStack = 0;
var numberGoal = 0;
var movePowerA = 0;
var movePowerB = 0;
var movePowerC = 0;
var movePowerD = 0;
var wins = 0;
var losses = 0;

$("#winDisplay").text(wins);
$("#lossDisplay").text(losses);

$(".startGame").on("click", function() {
	moveStack = 0;
	numberGoal = goalOptions[Math.floor(Math.random() * goalOptions.length)];
	movePowerA = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	movePowerB = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	movePowerC = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	movePowerD = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	$("#moveGoal").text(numberGoal);
	$("#movesDone").text(moveStack);
});

$(".crimp").on("click", function() {
	moveStack += movePowerA;
	$("#movesDone").text(moveStack);

    if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click the "Press Here to Begin" button to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
    else if (moveStack >= numberGoal) {
   	alert('Falling!! Good thing the belayer was there to catch you. Click the "Press Here to Begin" button to play again.');
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}
});

$(".heelHook").on("click", function() {
	moveStack += movePowerB;
	$("#movesDone").text(moveStack);
   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click the "Press Here to Begin" button to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
    else if (moveStack >= numberGoal) {
   	alert('Falling!! Good thing the belayer was there to catch you. Click the "Press Here to Begin" button to play again.');
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}

});

$(".underCling").on("click", function() {
	moveStack += movePowerC;
	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click the "Press Here to Begin" button to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
   	else if (moveStack >= numberGoal) {
   	alert('Falling!! Good thing the belayer was there to catch you. Click the "Press Here to Begin" button to play again.');
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}
});


$(".handJam").on("click", function() {
	moveStack += movePowerD;
   	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click the "Press Here to Begin" button to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
    	}
  
    else if (moveStack >= numberGoal) {
    alert('Falling!! Good thing the belayer was there to catch you. Click the "Press Here to Begin" button to play again.');
    losses ++;
    $("#lossDisplay").text(losses);
    }
});