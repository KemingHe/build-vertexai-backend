// src/index.js
const express = require('express');
const dotenv  = require('dotenv');

/* Set up a minimal Exp server on localhost: */

/* Load all env var from file to process.env: */
dotenv.config();

const app  = express();
const port = process.env.PORT;

/* Def root path route: */
app.get('/', (req, res) => {
  res.send('Simple Exp Ts Server here!');
});

/* Start Exp app and listen at port: */
app.listen(port, () => {
  console.log(`[server]: Express server running at http://localhost:${port}`);
});

