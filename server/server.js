const express = require('express');
const app = express();
const port = 5000;


// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const indexRouter = require('./router/auth-router');

// Use routes
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
