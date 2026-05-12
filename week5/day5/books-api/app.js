const express = require("express");

const app = express();

const PORT = 3000;


// MIDDLEWARE

app.use(express.json());


// IMPORT ROUTER

const bookRoutes =
  require("./routes/books");


// MOUNT ROUTER

app.use("/books", bookRoutes);


// START SERVER

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});