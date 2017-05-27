 var moveStack = 0;
var goalOptions = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,61,];
var moveOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var numberGoal = goalOptions[Math.floor(Math.random() * goalOptions.length)];
var movePowerA = moveOptions[Math.floor(Math.random() * moveOptions.length)];
var movePowerB = moveOptions[Math.floor(Math.random() * moveOptions.length)];
var movePowerC = moveOptions[Math.floor(Math.random() * moveOptions.length)];
var movePowerD = moveOptions[Math.floor(Math.random() * moveOptions.length)];
var wins = 0;
var losses = 0;

$("#moveGoal").text(numberGoal);
$("#movesDone").text(moveStack);
$("#winDisplay").text(wins);
$("#lossDisplay").text(losses);

$(".crimp").on("click", function() {
	moveStack += movePowerA;
	$("#movesDone").text(moveStack);

    if (moveStack === numberGoal) {
   	alert("Nice Onsite!")
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
    else if (moveStack >= numberGoal) {
   	alert("Falling!");
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}
});

$(".heelHook").on("click", function() {
	moveStack += movePowerB;
	$("#movesDone").text(moveStack);
   	if (moveStack === numberGoal) {
   	alert("Nice Onsite!")
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
    else if (moveStack >= numberGoal) {
   	alert("Falling!");
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}

});

$(".underCling").on("click", function() {
	moveStack += movePowerC;
	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert("Nice Onsite!")
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
   	else if (moveStack >= numberGoal) {
   	alert("Falling!");
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}
});


$(".handJam").on("click", function() {
	moveStack += movePowerD;
   	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert("Nice Onsite!")
   	wins ++;
   	$("#winDisplay").text(wins);
    	}
  
    else if (moveStack >= numberGoal) {
    alert("Falling!");
    losses ++;
    $("#lossDisplay").text(losses);
    }
});

$(".startGame").on("click", function() {
	numberGoal = goalOptions[Math.floor(Math.random() * goalOptions.length)];
	moveStack = 0;
	$("#moveGoal").text(numberGoal);
	$("#movesDone").text(moveStack);
});