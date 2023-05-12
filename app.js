const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Add routes for each page
app.use('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/page-projet', (req, res) => {
  res.sendFile('page-projet.html');
}, {
    exact: true
});

app.use('/page-communication', (req, res) => {
    res.sendFile('page-communication.html');
}, {
    exact: true
  });

app.use('/page-contact', (req, res) => {
    res.sendFile('page-contact.html');
}, {
    exact: true
  });

app.use('/page-roadmap', (req, res) => {
    res.sendFile('page-roadmap.html');
}, {
    exact: true
  });

app.use('/page-equipe', (req, res) => {
    res.sendFile('page-equipe.html');
}, {
    exact: true
  });

// Start the server
app.listen(8080, () => {
    console.log('App listening on port 8080');
  });
