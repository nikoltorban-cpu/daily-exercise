const express = require("express");

const app = express();

const PORT = 3000;


// MIDDLEWARE

app.use(express.json());


// IMPORT ROUTER

const todoRoutes =
  require("./routes/todos");


// MOUNT ROUTER

app.use("/todos", todoRoutes);


// START SERVER

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});