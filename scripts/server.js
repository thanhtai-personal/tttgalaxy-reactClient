const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
const port = 5000;
const cors = require('cors');
const jwt = require('jsonwebtoken');

const users = [
  {
    id: 'u1', password: 'phanhang2102', email: 'thanhtai.tttgalaxy@gmail.com'
  }
  , {
    id: 'u2', password: 'hang1993', email: 'phanhang2102@gmail.com'
  }
];

const secret = 'tttgalaxy';

const findUserByEmail = (email) => {
  return user = users.find((u) => u.email === email)
}

app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // support json encoded bodies
app.use('/api', router);
app.use(cors());


app.route('/api/login')
  .get(function (req, res) {
    res.json({
      message: 'Please login service'
    })
  })
  .post(function (req, res) {
    let data = req.body;
    let user = findUserByEmail(data.email);
    if (user) {
      if (user.password === data.password) {
        let token = jwt.sign({
          email: user.email,
        }, secret, { expiresIn : 60*60*24 });

        res.json({
          message: 'Login success!',
          token: token
        })
      } else {
        res.json({
          message: 'wrong username or password!'
        })
      }
    } else {
      res.json({
        message: 'wrong username or password!'
      })
    }
  })

function checkAuthenticate (req, res, next) {
  let token = req.body.token || req.param('token') || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        return res.json({
          message: 'unauthentication'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    res.json({
      message: 'unauthentication'
    })
  }
}


app.get('/', checkAuthenticate, function (req, res) {
  res.send(users);
})

app.listen(port, () => console.log(`Listening on port ${port}`));