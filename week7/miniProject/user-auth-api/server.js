const express = require('express');

const path = require('path');

const usersRoutes =
  require('./server/routes/usersRoutes');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/api', usersRoutes);

app.get('/', (req, res) => {

  res.sendFile(
    path.join(__dirname,
    'public',
    'register.html')
  );

});

const PORT = 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});