const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
    // Express will serve production assets - ie main.js / main.class
    app.use(express.static('client/build'));
  
    // Express will serve index.html if route isn't recognized
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
  }
  
const PORT = process.env.PORT || 5000;
app.listen(PORT);