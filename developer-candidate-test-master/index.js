const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/userRoutes');
const cors = require("cors");

const app = express();
const port = 9000;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Routes
app.use('/users', users);

// Handle 404 and errors
app.use((req, res, next) => {
  const err = new Error('not found')
  err.status = 404;
  next(err);
});

// // Error handler
// app.use((err, req, res, next) => {
//   const error = app.get('env') === 'development' ? err : {};
//   const status = err.status ? err.status : 500;
//   res.status(status).json({
//     error: {
//       message: error.message
//     }
//   });
// });

// Server
app.listen(port, () => {
  console.log(`Example app Listening on ${port}`);
});
