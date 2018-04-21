var trivia = $("#quiz-area");

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
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIMES UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").append("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      trivia.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        trivia.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    trivia.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    trivia.html("<h2>All Done!</h2>");
    trivia.append("<h3>Correct Answers: " + this.correct + "</h3>");
    trivia.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    trivia.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
