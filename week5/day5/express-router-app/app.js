const express = require("express");

const app = express();

const PORT = 3000;


// IMPORT ROUTER

const routes =
  require("./routes/index");


// MOUNT ROUTER

app.use("/", routes);


// START SERVER

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`

  );

});