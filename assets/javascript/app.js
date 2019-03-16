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

  $('input').attr('checked', false);

  // Show timer in HTML
  $('#timer').text(timer);

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

    if (timer === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
      checkAnswers();
    }
  }

};

// Function to check answers
var checkAnswers = function () {
  correct = 0;
  incorrect = 0;
  if (document.getElementById('correct1').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect1').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct2').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect2').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct3').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect3').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct4').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect4').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct5').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect5').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct6').checked) {
    correct++;
    console.log(correct);
  }
  
  if (document.getElementById('incorrect6').checked) {
    incorrect++;
    console.log(incorrect);
  }

  if (document.getElementById('correct7').checked) {
    correct++;
    console.log(correct);
  } 
  
  if (document.getElementById('incorrect7').checked) {
    incorrect++;
    console.log(incorrect);
  }

  $('#correctCount').text(correct);
  $('#incorrectCount').text(incorrect);

  $('#game').hide();
  $('#results').show();
    
}