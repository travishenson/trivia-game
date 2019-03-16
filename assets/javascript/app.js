$(document).ready(function () {

  // Hide the game on document ready and listen for click events
  $('#game').hide();
  $('#results').hide();
  $('#start').on('click', startGame);
  $('#submit').on('click', checkAnswers);
  $('#restart').on('click', startGame);

});


// Initial game values
var correct = 0;
var incorrect = 0;

var intervalId;
var timer = 70;
var timerOn = false;

// Questions, choices, and correct answer arrays
var questions = [
  'Which of these is not a subtitle of one of the games in the Elder Scrolls series?',
  'Who is the main character in the God of War game series?',
  'Which of these is NOT the nickname of a character in the Modern Warfare series?',
  'Who is the AI assistant in the Halo series?',
  'In what land does The Legend of Zelda take place?',
  'Which is estimated to have made the most money as a franchise?',
  'Which is not typically a starter Pokemon?'
];

var choices = [
  ['Morrowind', 'Skyrim', 'Cyrodiil', 'Oblivion'],
  ['Kratos', 'Zeus', 'Ares', 'Mars'],
  ['Ghost', 'Soap', 'Roach', 'Bear'],
  ['Cortana', 'Alexa', 'Siri', 'SPARTAN'],
  ['Nirn', 'Hyrule', 'Mushroom Kingdom', 'Daventry'],
  ['Mario', 'Pokemon', 'Call of Duty', 'World of Warcraft'],
  ['Bulbasaur', 'Charmander', 'Squirtle', 'Mew']
];

var answers = [
  'Cyrodiil',
  'Kratos',
  'Bear',
  'Cortana',
  'Hyrule',
  'Pokemon',
  'Mew'
];

// Function to start game
var startGame = function () {
  // Reset trivia game values
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  timerOn = false;

  if (timeOn = true) {
    timer = 70;
    clearInterval(intervalId);
  }

  // Show timer in HTML
  $('#timer').text(timer);

  // Clear radio button selections if left from previous game
  $('.radioButton').prop('checked', false);

  // Hide welcome messages and show the game
  $('#game').show();
  $('#welcome').hide();
  $('#results').hide();

  // Populate page with questions
  for (var i = 0; i < questions.length; i++) {
    $("#q" + [i + 1]).text([i + 1] + '. ' + questions[i]);
  }

  // Begin timer countdown from 60 to 0
  if (!timerOn) {
    intervalId = setInterval(countdown, 1000);
    timerOn = true;
  }

  function countdown() {
    timer--;
    $('#timer').text(timer);

    if (timer === 0 & timerOn === true) {
      clearInterval(intervalId);
      alert("Time's up!");
      checkAnswers();
    }
  }

};

// Function to check answers
var checkAnswers = function () {
  timerOn = false;

  // Hacky fix to force full functionality
  correct = 1;
  incorrect = 0;

  for (var i = 1; i <= 7; i++) {
    
    if ($('.correct' + [i]).is(':checked')) {
      correct++; 
      console.log(correct);
    } else if ($('.incorrect' + [i]).is(':checked')) {
      incorrect++;
      console.log(incorrect);
    }
  }

  // Hacky fix for the bug that counts correct incorrectly
  if (incorrect === 7) {
    correct = 0;
  }

  $('#game').hide();
  $('#results').show();

  $('#correctCount').text(correct);
  $('#incorrectCount').text(incorrect);
    
}