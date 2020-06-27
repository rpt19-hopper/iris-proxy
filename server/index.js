// SERVER
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 9999;

app.listen(port);

app.get('/listing/:productNumber', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client/dist'),
  });
});

app.get('/loaderio-858d7b65fcecbf72881840fa6b65813d', (req, res) => {
  res.sendFile('loaderio-858d7b65fcecbf72881840fa6b65813d.txt', {
    root: path.join(__dirname, '/../client/dist'),
  });
})