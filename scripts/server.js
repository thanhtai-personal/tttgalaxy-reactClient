const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/user', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/register', (req, res) => {
  console.log(req.body);
  let dataResponse = { email: req.body.email }
  res.send(
    JSON.stringify(dataResponse),
  );
});
app.post('/api/login', (req, res) => {
  let dataResponse = { email: req.body.email }
  res.send(
    JSON.stringify(dataResponse),
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));