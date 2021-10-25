const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const { getAll } = require('./model/reactionsModel')

app.get('/', async (_req, res) => {
  const result = await getAll();
  res.status(200).json({ results: result });
});
require('./sockets/votes')(io);


app.listen(3001, () => console.log("ouvindo a porta 3001"));