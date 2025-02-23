// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});