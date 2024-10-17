const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

console.log('Initializing server...');

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));
console.log('Serving static files from "src" directory.');

// Import and use the proxy middleware
require('./proxy')(app);
console.log('Proxy middleware initialized.');

// Route for serving the main HTML file
app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
