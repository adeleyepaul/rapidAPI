const express = require('express');
const axios = require('axios');

const app = express();

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://dad-jokes.p.rapidapi.com/random/joke', {
      headers: {
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
        'x-rapidapi-key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637',
        'useQueryString': true
      }
    });

    const joke = response.data.body[0].setup + ' ' + response.data.body[0].punchline;
    res.json({ joke });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
