const express = require('express');
const morgan = require('morgan')
const app = express();
const port=8080;

const { seatRouter } = require('./src/router/seatRouter.js');
const { performanceRouter } = require('./src/router/performanceRouter.js');

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/', seatRouter);
app.use('/api/', performanceRouter);

const start = async () => {
  try {
    app.listen(port);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
}

start();

//ERROR HANDLER
app.use(errorHandler)

function errorHandler (err, req, res, next) {
  console.error('err')
  res.status(500).send({'message': 'Server error1'});
}