// Directions
$('a.what').click(function(){
	$('.overlay').fadeIn(500);
});

$('.overlay').click(function(){
	$('.overlay').fadeOut(500);
});

// var guessInput.val() = guessInput.val();
var guessList = [];
var guessCount = 0;
var guessInput = $('#userGuess');
var feedback, targetValue;

// Where variable information is going to be put in the DOM
// $('#guessList').html(guessList);
// $('#count').html(guessCount);
// $('#feedback').html(feedback);

// To start
guessInput.focus();

function resetDOM(){
	guessList = [];
	guessCount = 0;
	feedback = 'Make your Guess!';
	guessInput.html('');
	guessInput.focus();
}

function updateDOM(){
	$('#guessList').html(guessList);
	$('#count').html(guessCount);
	$('#feedback').html(feedback);
}

function newGame(){
	targetValue = Math.floor(Math.random() * (99)) + 1;
	console.log('target is '+targetValue);
	resetDOM();
	updateDOM();
}

newGame();

function wonGame(){
	feedback = 'Yay you did it!';
	$('#guessButton').css('opacity', '0');
}

function feedbackGuess(){
		if (targetValue == guessInput.val()){
			wonGame();
		} else if(Math.abs(targetValue - guessInput.val()) < 10){
			feedback = 'Fiery!'; 
			$('#feedback').addClass('fiery');
		} else if(Math.abs(targetValue - guessInput.val()) < 20 && Math.abs(targetValue - guessInput.val()) > 9){
			feedback = 'Hot!';
		} else if(Math.abs(targetValue - guessInput.val()) < 30 && Math.abs(targetValue - guessInput.val()) > 19){
			feedback = 'Lukewarm';
			$('#feedback').addClass('lukewarm');
		} else {
			feedback = 'Cold';
			$('#feedback').addClass('cold');
		}

	}


// Assuming the entry is valid, submit the Guess
function submitGuess() {
	
	guessList.push('<li>'+guessInput.val()+'</li>');//add it to the guessList array
	guessCount++;// increase the count for each time a guess is successfully submitted
	guessInput.focus(); //bring cursor back to guess input field
	feedbackGuess();
	updateDOM();
	}

function qualifyGuess() {
     
       

	if (guessInput.val()%1 === 0 && guessInput.val() > 0 && guessInput.val() < 100) {
		submitGuess();
	}

    else if (guessInput.val() >= 100) {
        alert("Oops! That number is above 100. Please enter a number somewhere in between 1 and 100.");
        return;
    }

    else if (guessInput.val() < 0) {
        alert("mmOops! That number below 1. Please enter a number somewhere in between 1 and 100.");
        return;
    }

    else if (guessInput.val()%1 !== 0 && parseInt(guessInput.val())%1 === 0){
        alert("Oops! We're looking for an integer between 1 and 100.");
        return;
    }
    else if(guessInput.val() ==)


    else {
        alert("That has an non-number character in it. Please just put in an integer.");
        return;
    }
}

$('form').submit(function(event){
	qualifyGuess();
	console.log(guessInput.val());
});


// Key: function is Guess second word, variable is guess first word.

