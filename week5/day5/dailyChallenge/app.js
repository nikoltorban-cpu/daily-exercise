const express = require("express");

const app = express();

const PORT = 3000;


// MIDDLEWARE

app.use(express.json());


// IMPORT ROUTER

const quizRoutes =
  require("./routes/quiz");


// MOUNT ROUTER

app.use("/quiz", quizRoutes);


// START SERVER

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});