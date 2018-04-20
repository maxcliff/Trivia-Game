var trivia = $("#quiztime");

var questions = [{
  question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
  answers: ["Reggie Jackson", "Harmon Killebrew", "Willie Mays"],
  correctAnswer: "Willie Mays",
 
  
}, {
  question: "Which star is an actor in Pursuit of Happiness?",
  answers: ["Will Ferrell", "Tupac Shakur", "Jaden Smith"],
  correctAnswer: "Jaden Smith",
  
}, {
  question: "Where is the 2018 World Cup being played?",
  answers: ["Russia", "Belgium", "South Africa"],
  correctAnswer: "Russia",
  
}, {
  question: "What state is Justin Timberlake from?",
  answers: ["Mississippi", "Massachussetts", "Tennessee"],
  correctAnswer: "Tennessee",
  
}];


var game = {

  questions: questions,
  currentQuestion: 0,
  correct: 0,
  incorrect: 0,


  askQuestion: function() {

    trivia.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    answer = setInterval(game.countdown, 1000);

    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      trivia.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.currentQuestion++;
    game.askQuestion();
  },


  results: function() {

    trivia.html("<h3>Your results!</h3>");

    trivia.append("<h2>Correct: " + game.correct + "</h2>");
    trivia.append("<h3>Incorrect: " + game.incorrect + "</h3>");
    trivia.append("<br><button id='start-over'>Try Again</button>");
  },

  clicked: function(click) {
    if ($(click.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.correctAnswer();
    }
    else {
      this.wrongAnswer();
    }
  },

  wrongAnswer: function() {

    game.incorrect++;

    trivia.html("<h2>Nope!</h2>");
    trivia.append(questions[game.currentQuestion].correctAnswer + "<h3> was the correct answer.</h3>");
    
    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },

  correctAnswer: function() {

    clearInterval(answer);

    game.correct++;

    trivia.html("<h2>Correct!</h2>");
    

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2* 1000);
    }
    else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;

    this.correct = 0;

    this.incorrect = 0;
    
    this.askQuestion();
  }
};


$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(click) {
  game.clicked(click);
});

$(document).on("click", "#start", function() {
  game.askQuestion();
});
