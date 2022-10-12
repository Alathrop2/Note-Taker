const express = require('express');
const path = require('path');

const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req, res) => res.send(''));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.json(path.join(__dirname, './public/notes.html'))
);

// app.post('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/notes.html'))
// );

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//! grade requirements
// GIVEN a note-taking application
// WHEN I open the Note Taker
// todo THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// todo THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// todo THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// todo THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// todo THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// todo THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
