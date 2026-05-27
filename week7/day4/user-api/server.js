const express = require('express');

const usersRoutes =
  require('./server/routes/usersRoutes');

const app = express();

app.use(express.json());

app.use('/', usersRoutes);

app.use((req, res) => {

  res.status(404).json({
    message: 'Route not found'
  });

});

const PORT = 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});