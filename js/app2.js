
$(document).ready(function() {
    // Directions
    $('a.what').click(function() {
        $('.overlay').fadeIn(500);
    });
    
    $('.overlay').click(function() {
        $('.overlay').fadeOut(500);
    });
    
    // var guessInput.val() = guessInput.val();
    var guessList = [];
    var guessCount = 0;
    var guessInput = $('#userGuess');
    var feedback, targetValue;
    
    // To start
    guessInput.focus();
    
    function clearEntry() {
        guessInput.val('');
        guessInput.focus();
    }
    function resetDOM() {
        feedback = 'Make your Guess!';
        $('#feedback').attr('class', '');
        guessList = [];
        guessCount = 0;
        clearEntry();
    
    }
    
    function updateDOM() {
        event.preventDefault();
        $('#guessList').html(guessList);
        $('#count').html(guessCount);
        $('#feedback').html(feedback);
    }
    
    function newGame() {
        targetValue = Math.floor(Math.random() * (99)) + 1;
        console.log('target is ' + targetValue);
        resetDOM();
        updateDOM();
    }
    
    newGame();
    $('.new').on("click", function(event) {
        newGame();
    });
    
    function wonGame() {
        feedback = 'Yay you did it!';
        $('#feedback').attr('class', 'win');
        $('#guessButton').css('opacity', '0');
    }
    
    function feedbackGuess() {
        if (targetValue == guessInput.val()) {
            wonGame();
        } else if (Math.abs(targetValue - guessInput.val()) <= 10) {
            feedback = 'Fiery!';
            $('#feedback').attr('class', 'fiery');
        } else if (Math.abs(targetValue - guessInput.val()) <= 20 && Math.abs(targetValue - guessInput.val()) >= 11) {
            feedback = 'Hot!';
            $('#feedback').attr('class', '');
        } else if (Math.abs(targetValue - guessInput.val()) <= 30 && Math.abs(targetValue - guessInput.val()) >= 21) {
            feedback = 'Lukewarm';
            $('#feedback').attr('class', 'lukewarm');
        } else {
            feedback = 'Cold';
            $('#feedback').attr('class', 'cold');
        }
    
    }
    
    
    // Assuming the entry is valid, submit the Guess
    function submitGuess() {
        
        guessList.push('<li>' + guessInput.val() + '</li>');
        //add it to the guessList array
        guessCount++;
        // increase the count for each time a guess is successfully submitted
        guessInput.focus();
        //bring cursor back to guess input field
        feedbackGuess();
        updateDOM();
        event.preventDefault();
        clearEntry();
    }
    
    function qualifyGuess() {
        event.preventDefault();
        
        
        if (guessInput.val() % 1 === 0 && guessInput.val() > 0 && guessInput.val() < 100) {
            submitGuess();
        } 
        
        else if (guessInput.val() >= 100) {
            alert("Oops! That number is above 100. Please enter a number somewhere in between 1 and 100.");
            clearEntry();
        } 
        
        else if (guessInput.val() < 0) {
            alert("Oops! That number below 1. Please enter a number somewhere in between 1 and 100.");
            clearEntry();
        } 
        
        else if (guessInput.val() % 1 !== 0 && parseInt(guessInput.val()) % 1 === 0) {
            alert("Oops! We're looking for an integer between 1 and 100.");
            clearEntry();
        } 
        else if (guessInput.val() == 0) {
            clearEntry();
        } 
        
        
        else {
            alert("That has an non-number character in it. Please just put in an integer.");
            clearEntry();
        }
    }
    
    $('form').submit(function(event) {
        qualifyGuess();
        console.log(guessInput.val());
    });
    
    
    // Key: function is Guess second word, variable is guess first word.
});
