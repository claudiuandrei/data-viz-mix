const express = require('express');
const nunjucks = require('nunjucks');
const cfenv = require('cfenv').getAppEnv();
const path = require('path');
const app = express();

nunjucks.configure(path.resolve(__dirname, 'views'), {
  autoescape: true,
  express   : app
});

app.get('/', (req, res) => {
  res.render(__dirname + '/views/index.html')
})

app.get('/bubble', (req, res) => {
  res.render(__dirname + '/views/bubble.html')
})

app.get('/stacked', (req, res) => {
  res.render(__dirname + '/views/stacked.html')
})

app.get('/map', (req, res) => {
  res.render(__dirname + '/views/map.html')
})

app.get('/pie', (req, res) => {
  res.render(__dirname + '/views/pie.html')
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(cfenv.port, () => {
  console.log(`Server starting on ${cfenv.url}`);
});
