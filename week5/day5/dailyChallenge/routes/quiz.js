const express = require("express");

const router = express.Router();


// TRIVIA QUESTIONS

const triviaQuestions = [

  {
    question:
      "What is the capital of France?",

    answer: "Paris"
  },

  {
    question:
      "Which planet is known as the Red Planet?",

    answer: "Mars"
  },

  {
    question:
      "What is the largest mammal in the world?",

    answer: "Blue whale"
  }

];


// GAME STATE

let currentQuestionIndex = 0;

let score = 0;


// START QUIZ

router.get("/", (req, res) => {

  currentQuestionIndex = 0;

  score = 0;

  res.json({

    message:
      "Quiz started!",

    question:
      triviaQuestions[
        currentQuestionIndex
      ].question

  });

});


// SUBMIT ANSWER

router.post("/", (req, res) => {

  const { answer } = req.body;

  const currentQuestion =
    triviaQuestions[
      currentQuestionIndex
    ];

  let feedback = "";

  if (

    answer.toLowerCase() ===

    currentQuestion.answer
      .toLowerCase()

  ) {

    score++;

    feedback = "✅ Correct!";

  } else {

    feedback =
      `❌ Wrong! Correct answer: ${currentQuestion.answer}`;

  }

  currentQuestionIndex++;


// CHECK IF QUIZ ENDED

  if (

    currentQuestionIndex >=
    triviaQuestions.length

  ) {

    return res.json({

      message:
        "Quiz completed!",

      feedback,

      finalScore:
        `${score}/${triviaQuestions.length}`

    });

  }


// NEXT QUESTION

  res.json({

    feedback,

    nextQuestion:

      triviaQuestions[
        currentQuestionIndex
      ].question

  });

});


// FINAL SCORE

router.get("/score", (req, res) => {

  res.json({

    score,

    total:
      triviaQuestions.length

  });

});


module.exports = router;