// Express backend logic:
const express = require('express');
const axios = require('axios');

// Create express app and serve file from the public dir:
const app = express();
app.use(express.static('public'));

// Route to home page, index.html:
app.get('/', (req, res) => {

  res.sendFile('index.html', {root:__dirname});

});

// Route to API endpoint:
app.post('/predict', async (req, res) => {
  try{

    // Extract data, post, wait, and receive response:
    const {projectId, 
           region, 
           modelId, 
           payload
          } = req.body;

    const url = `https://automl.googleapis.com/v1beta1`
                + `/projects/${projectId}`
                + `/locations/${region}`
                + `/models/${modelId}`
                + `:predict`;

    const response = await axios.post(url, payload);

    res.json(response.data);

  } catch (err) {

    res.status(500).send({messege: err.messege});

  }
});

// Start local server and print to console:
app.listen(3000, () => {

  console.log('Server standby listening on port 3000');

});

