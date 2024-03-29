const express = require('express');
const app = express();
const port = 3001; // React's default is 3000

app.get('/', (req, res) => {
  res.send('Hello from Game of Rent server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
