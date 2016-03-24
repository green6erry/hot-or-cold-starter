//initialize variables
'use strict';
var secretNumber, 
userGuess, 
pastGuesses = [], 
count,
guessHtml, 
userFeedback,
alreadyGuessed,
newButton,
form ,
input,
feedback,
countElement,
guessList;

<<<<<<< HEAD
$(document).ready(pageLoad);

 function pageLoad(){
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	//fetch dom objects
  	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');

    //page load
    newGame();
    //event handlers
    form.submit(function(event){
      event.preventDefault();
      getUserGuess();
    });
    newButton.click(newGame);
}

//new game function
function newGame(){
	form.find('input[type=submit]').css('opacity','1');
	resetVariables();
	render();
	generateNumber();
}

//get the user guess
function getUserGuess(){
	//get the user guess
	userGuess = input.val();
	//reset input value
	input.val('');
	//focus on input for next guess
	input.focus();
	//ensure valid input
	if(checkGuess()){return ;}
	//generate feedback
	generateFeedback();
	//track the past user guesses
	trackGuess();
	//increment the count
	guessCount();
	//render changes to the page
	render();
}

  	//check for valid input
  	function checkGuess(){
  		if(userGuess % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('please choose a number between zero and 100');
  			return true;
  		}
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(userGuess == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}

//generate user feedback
function generateFeedback(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}

//keep track of the users past guesses
function trackGuess(){
	pastGuesses.push(userGuess);
	guessHtml = '';
	if(pastGuesses[0].length) {
		$.each(pastGuesses,function(guess,value){
			guessHtml += '<li>' + value + '</li>';
		});
	}
}

//keep track of guess count
function guessCount(){
	count++;
}

	//page render function
function render(){
	guessList.html(guessHtml);
	countElement.html(count);
	feedback.html(userFeedback);
}

function winner(){
	userFeedback = 'You Won. Click new game to play again';
	form.find('input[type=submit]').css('opacity','0');
}
  	
//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

//reset variable 
function resetVariables(){
	count = 0;
	pastGuesses = [];
	guessHtml='';
	userGuess = '';
	userFeedback = 'Make your Guess!';
}
  	
  	

  


=======
$(document).ready(function(){
// Initialize variables (copied and pasted from example)
	var targetNumber, 
	userGuess, 
	pastGuesses = [], //array!
	count,
	guessHtml, 
	userFeedback,
	alreadyGuessed,
	newButton,
	form,
	input,
	feedback,
	countElement,
	guessList,
	guessDiff,
	submitButt;

	// (didn't put in 'use strict' yet because I don't know what that is)


// Fade in the "overlay" with the "what? anchor"

$('a.what').click(function(){
	$('.overlay').fadeIn(500);
});

$('.overlay').click(function(){
	$('.overlay').fadeOut(500);
});

// assigning names to jQuery calls. 
// (Adding to this as I go.)

	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');
  	submitButt = form.find('input[type=submit]');


$(document).ready(initialize);

function initialize(){
		startNewGame();
		newButton.click(startNewGame);
	}

form.submit(function(event){
	event.preventDefault();
	play();
});
	
	
function startNewGame(){
	submitButt.css('opacity', '1');
	reset();
	render();
	getNewRandoNumber();
	console.log(targetNumber);
	input.focus();
}


// game function to compare the game entry to random number
// AKA "getUserGuess" in example
function play() {
	//input assigned to user guess field, tuning it into a value
	userGuess = input.val(); 

	//reset input field
	input.val('');

	//put cursor back in input section
	input.focus();

	//respond to guess
		//only put the guess through if qualify() is true
		if(qualify()){return ;}

	//adjust feedback
	giveFeedback();

	//store the guess in list below
	trackGuess();

	//increase count upon submission
	addCount();

	//render changes? I still kind of don't get why this is a seperate function...
	render();
	}

//checkGuess - function to compare guess
	function qualify(){
		if(userGuess%1 !== 0){
			alert('Please put a number.');
			return true;
		}

		if(userGuess <= 1 || userGuess >= 100) {
			alert('Please pick a number within the given range.');
			return true;
		}

		if(pastGuesses.length > 0){
			$.each(pastGuesses, function(guess,value){
				if(userGuess === value){
					alreadyGuessed = true;
				}
			});
		}

		if (alreadyGuessed){
			alreadyGuessed = false;
			alert('You already guessed this number');
			return true;
		}

		return false; //so I guess the if else and else doesn't really matter

	}

//generateFeedback - to change the text out in #feedback in regards to hot or cold
	function giveFeedback(){
		if (targetNumber == userGuess){
			winner();
		} else if(Math.abs(targetNumber - userGuess) < 10){
			userFeedback = 'Fiery!'; 
			//userFeedback.addClass(fiery);
		} else if(Math.abs(targetNumber - userGuess) < 20 && Math.abs(targetNumber - userGuess) > 9){
			userFeedback = 'Hot';
		} else if(Math.abs(targetNumber - userGuess) < 30 && Math.abs(targetNumber - userGuess) > 19){
			userFeedback = 'Lukewarm'; //userFeedback.addClass(lukewarm);
		} else {
			userFeedback = 'Cold';
			feedback.addClass('cold');
		}

	}

//trackGuess - to list guesses below
//as well as not allow previous entries?
	function trackGuess(){
		pastGuesses.push(userGuess);
		guessHtml = '';
		if(pastGuesses[0].length){
			$.each(pastGuesses,function(guess,value){
				guessHtml+= '<li>'+value+'</li>';
			});
		}
	}

//add the number of entries
	// increases abrbitrary count variable by 1
	//11
	function addCount() {
		count++;
	}

//render? I don't get this one...
	function render(){
		guessList.html(guessHtml);
		countElement.html(count);
		feedback.html(userFeedback);
	}

// winner function
	function winner(){
		userFeedback = 'Yay you did it!';
		submitButt.css('opacity','0');

	}


// establish a random number - to go within "new game"
	function getNewRandoNumber() {
		targetNumber = Math.floor(Math.random() * (99)) + 1;
	}


//function to reset variables
	function reset(){
		userFeedback = 'Make your Guess!';
		count = 0; //sets count back to 0
		userGuess = ''; //clears entry
		pastGuesses = []; //erases the array
		guessHtml=''; //erases all formatting?

	}


//end of script file
});
>>>>>>> master


