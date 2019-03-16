$(document).ready(function () {

  // Hide the game on document ready and listen for click events
  $('#game').hide();
  $('#start').on('click', triviaGame.startGame);
  // $(document).on('click', '.choice', triviaGame.checkGuess);

});

var triviaGame = {
  // Initial game values
  correct: 0,
  incorrect: 0,
  unanswered: 0,
  questionsShown: [],
  timer: 20,
  timerOn: false,

  // Questions, choices, and correct answer arrays
  questions: [
    'Which of these is not a subtitle of one of the games in the Elder Scrolls series?',
    'Who is the main character in the God of War game series?',
    'Which of these is NOT the nickname of a character in the Modern Warfare series?',
    'Who is the AI assistant in the Halo series?',
    'In what land does The Legend of Zelda take place?',
    'Which is estimated to have made the most money as a franchise?',
    'Which is not typically a starter Pokemon?'
  ],
  choices: [
    ['Morrowind', 'Skyrim', 'Cyrodiil', 'Oblivion'],
    ['Kratos', 'Zeus', 'Ares', 'Mars'],
    ['Ghost', 'Soap', 'Roach', 'Bear'],
    ['Cortana', 'Alexa', 'Siri', 'SPARTAN'],
    ['Nirn', 'Hyrule', 'Mushroom Kingdom', 'Daventry'],
    ['Mario', 'Pokemon', 'Call of Duty', 'World of Warcraft'],
    ['Bulbasaur', 'Charmander', 'Squirtle', 'Mew']
  ], 
  answers: [
    'Cyrodiil',
    'Kratos',
    'Bear',
    'Cortana',
    'Hyrule',
    'Pokemon',
    'Mew'
  ],

  // Method to start a new game
  startGame: function () {
    // Reset trivia game values
    triviaGame.correct = 0;
    triviaGame.incorrect = 0;
    triviaGame.unanswered = 0;

    // Hide welcome messages and show the game
    $('#game').show();
    $('#welcome').hide();

    triviaGame.newQuestion();
  },

  // Method to advance to next question
  newQuestion: function () {
    var questionsShown = triviaGame.questionsShown;
    var questions = triviaGame.questions;

    // Set timer to 20 seconds and show in HTML
    triviaGame.timer = 20;
    $('#timer').text(triviaGame.timer);

    // Choose question and then push it to questionsShown array
    var currentQuestion = questions[Math.floor(Math.random() * triviaGame.questions.length)];
    var currentChoices = triviaGame.choices[questions.indexOf(currentQuestion)];
    console.log(currentQuestion);
    console.log(currentChoices);

    if (questionsShown.indexOf(currentQuestion) < 0) {
      $('#question').text(currentQuestion);
      $(triviaGame.questionsShown).push(currentQuestion);
      $('#choice1').text('A: ' + currentChoices[0]);
      $('#choice2').text('B: ' + currentChoices[1]);
      $('#choice3').text('C: ' + currentChoices[2]);
      $('#choice4').text('D: ' + currentChoices[3]);
    } else {
      newQuestion();
    }
  }
}
