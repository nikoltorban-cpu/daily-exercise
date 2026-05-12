const emojiDiv =
  document.getElementById("emoji");

const optionsDiv =
  document.getElementById("options");

const feedback =
  document.getElementById("feedback");

const scoreText =
  document.getElementById("score");

const nextBtn =
  document.getElementById("nextBtn");

const leaderboardList =
  document.getElementById(
    "leaderboard"
  );

const saveScoreBtn =
  document.getElementById(
    "saveScoreBtn"
  );

let currentScore = 0;


// LOAD QUESTION

async function loadQuestion() {

  const response = await fetch(
    "/api/question"
  );

  const data = await response.json();

  emojiDiv.textContent = data.emoji;

  scoreText.textContent =
    `Score: ${data.score}`;

  optionsDiv.innerHTML = "";

  data.options.forEach(option => {

    const button =
      document.createElement("button");

    button.textContent = option;

    button.classList.add("option-btn");

    button.addEventListener(
      "click",
      () => submitGuess(option)
    );

    optionsDiv.appendChild(button);

  });

}


// SUBMIT GUESS

async function submitGuess(guess) {

  const response = await fetch(
    "/api/guess",

    {

      method: "POST",

      headers: {

        "Content-Type":
          "application/json"

      },

      body: JSON.stringify({

        guess

      })

    }

  );

  const data = await response.json();

  if (data.correct) {

    feedback.textContent =
      "✅ Correct!";

  } else {

    feedback.textContent =
      `❌ Wrong! Correct answer: ${data.correctAnswer}`;

  }

  scoreText.textContent =
    `Score: ${data.score}`;
}


// SAVE SCORE

saveScoreBtn.addEventListener(
  "click",

  async () => {

    const username =
      document.getElementById(
        "username"
      ).value;

    const response = await fetch(

      "/api/leaderboard",

      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json"

        },

        body: JSON.stringify({

          username

        })

      }

    );

    const leaderboard =
      await response.json();

    renderLeaderboard(
      leaderboard
    );

  }

);


// LOAD LEADERBOARD

async function loadLeaderboard() {

  const response = await fetch(
    "/api/leaderboard"
  );

  const leaderboard =
    await response.json();

  renderLeaderboard(
    leaderboard
  );

}


// RENDER LEADERBOARD

function renderLeaderboard(
  leaderboard
) {

  leaderboardList.innerHTML = "";

  leaderboard.forEach(player => {

    const li =
      document.createElement("li");

    li.textContent =
      `${player.username}: ${player.score}`;

    leaderboardList.appendChild(li);

  });

}


// NEXT QUESTION

nextBtn.addEventListener(
  "click",
  loadQuestion
);


loadQuestion();

loadLeaderboard();