
var goalOptions = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,61,];	//An array of possible climb lengths
var moveOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];  //An array of possible move values
var moveStack = 0;  //A variable where moves are added together
var numberGoal = 0; //A varaible that shows the randomly selected goal number
var movePowerA = 0; //Varaibles that represent the value of each move button
var movePowerB = 0;
var movePowerC = 0;
var movePowerD = 0;
var wins = 0; //Variables for wins and losses
var losses = 0;

$("#winDisplay").text(wins);  //attaches the wins and losses variables to a display in the html
$("#lossDisplay").text(losses);

$(".startGame").on("click", function() {  //A function that activates when the start button is clicked that sets the score to zero, calculates random numbers from the moveOptions variable and puts a random goal into html.
	moveStack = 0;   //this sets the move stack varaible to zero
	numberGoal = goalOptions[Math.floor(Math.random() * goalOptions.length)];    //this pulls a random number from the goalOptions array
	movePowerA = moveOptions[Math.floor(Math.random() * moveOptions.length)];    //These pull  randoms number from the moveOptons array
	movePowerB = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	movePowerC = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	movePowerD = moveOptions[Math.floor(Math.random() * moveOptions.length)];
	$("#moveGoal").text(numberGoal); //this displays the current number pulled from the goalOptions array
	$("#movesDone").text(moveStack);    //This displays the current number of moves performed.
});

$(".crimp").on("click", function() {  //A function that activates when the crimp button is clicked. It adds the move power number to the score, and then compares it to the goal number and either does nothing else, or determines and win or loss and changes the scores and alerts a win or loss if relevent.
	moveStack += movePowerA;   //this adds onto the move stack number by the random number that movePowerA represents for this playthrough.
	$("#movesDone").text(moveStack);   //This displays the curent amount of "moves" performed.

    if (moveStack === numberGoal) { //this function records a win, changes the score and alerts a messege.
   	alert('Nice onsite! You reached the top. Click "Press Here to Begin" to play again.')  //this alerts that the player has won.
   	wins ++;    //this adds one point to the wins counter.
   	$("#winDisplay").text(wins);  //This displays the wins counter
   	}
  
    else if (moveStack >= numberGoal) { //This function records a loss, changes the score and alerts a message
   	alert('Falling!! Good thing the belayer was there to catch you. Click "Press Here to Begin" to play again.');  //This alert that the player has lost.
   	losses ++;  //This adds one to the losses counter 
   	$("#lossDisplay").text(losses);   //This displays the losses counter
   	}
});

$(".heelHook").on("click", function() {   //This is the same as the above function exept it activates on the heel hook button.
	moveStack += movePowerB;
	$("#movesDone").text(moveStack);
   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click "Press Here to Begin" to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
    else if (moveStack >= numberGoal) {
   	alert('Falling!! Good thing the belayer was there to catch you. Click "Press Here to Begin" to play again.');
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}

});

$(".underCling").on("click", function() {   //Same as the above functions exept it acts on a click on the undercling button.
	moveStack += movePowerC;
	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click "Press Here to Begin" to play again.')
   	wins ++;
   	$("#winDisplay").text(wins);
   	}
  
   	else if (moveStack >= numberGoal) {
   	alert('Falling!! Good thing the belayer was there to catch you. Click "Press Here to Begin" to play again.');
   	losses ++;
   	$("#lossDisplay").text(losses);
   	}
});


$(".handJam").on("click", function() {  //Same as the above functions except for this one acts on a click of the handjam button.
	moveStack += movePowerD;
   	$("#movesDone").text(moveStack);
	   	if (moveStack === numberGoal) {
   	alert('Nice onsite! You reached the top. Click "Press Here to Begin" to play again.');
   	wins ++;
   	$("#winDisplay").text(wins);
    	}
  
    else if (moveStack >= numberGoal) {
    alert('Falling!! Good thing the belayer was there to catch you. Click "Press Here to Begin" to play again.');
    losses ++;
    $("#lossDisplay").text(losses);
    }
});