const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(
  express.static(
    path.join(__dirname, "public")
  )
);


// EMOJIS

const emojis = [

  { emoji: "😀", name: "Smile" },

  { emoji: "🐶", name: "Dog" },

  { emoji: "🌮", name: "Taco" },

  { emoji: "🍕", name: "Pizza" },

  { emoji: "🚗", name: "Car" },

  { emoji: "🎮", name: "Game" },

  { emoji: "🐱", name: "Cat" },

  { emoji: "🌈", name: "Rainbow" }

];


// LEADERBOARD

let leaderboard = [];


// SCORE

let score = 0;


// RANDOM GAME

function getRandomQuestion() {

  const correctEmoji =

    emojis[
      Math.floor(
        Math.random() * emojis.length
      )
    ];

  const options = [correctEmoji.name];

  while (options.length < 4) {

    const randomOption =

      emojis[
        Math.floor(
          Math.random() * emojis.length
        )
      ].name;

    if (!options.includes(randomOption)) {

      options.push(randomOption);

    }
  }

  options.sort(() => Math.random() - 0.5);

  return {

    emoji: correctEmoji.emoji,

    correctAnswer: correctEmoji.name,

    options

  };
}


// CURRENT QUESTION

let currentQuestion =
  getRandomQuestion();


// GET QUESTION

app.get("/api/question", (req, res) => {

  currentQuestion =
    getRandomQuestion();

  res.json({

    emoji: currentQuestion.emoji,

    options: currentQuestion.options,

    score

  });

});


// CHECK ANSWER

app.post("/api/guess", (req, res) => {

  const { guess } = req.body;

  let correct = false;

  if (

    guess ===
    currentQuestion.correctAnswer

  ) {

    score++;

    correct = true;

  }

  res.json({

    correct,

    correctAnswer:
      currentQuestion.correctAnswer,

    score

  });

});


// SAVE SCORE

app.post("/api/leaderboard", (req, res) => {

  const { username } = req.body;

  leaderboard.push({

    username,

    score

  });

  leaderboard.sort(
    (a, b) => b.score - a.score
  );

  leaderboard =
    leaderboard.slice(0, 10);

  score = 0;

  res.json(leaderboard);

});


// GET LEADERBOARD

app.get("/api/leaderboard", (req, res) => {

  res.json(leaderboard);

});


// START SERVER

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});