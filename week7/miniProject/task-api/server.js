const express = require('express');

const tasksRoutes =
  require('./server/routes/tasksRoutes');

const app = express();

app.use(express.json());

app.use('/', tasksRoutes);

app.use((req, res) => {

  res.status(404).json({
    message: 'Route not found'
  });

});

app.use((err, req, res, next) => {

  res.status(500).json({
    message: 'Server error'
  });

});

const PORT = 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});