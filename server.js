const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// HTML Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// GET request
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

// POST request
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;
  let id = uuid();
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    const dbInfo = JSON.parse(data);
    dbInfo.push({ title, text, id });
    const db2 = JSON.stringify(dbInfo);
    fs.writeFile('./db/db.json', db2, (err) => {
      if (err) {
        console.log('ERROR');
      } else {
        console.log('New note added');
      }
    });
  });
  res.sendFile(path.join(__dirname, './db/db.json'));
});

// // todo Delete request
// app.delete('/api/notes/:id', (req, res) => {
//   fs.readFile('./db/db.json', 'utf-8', (err, data) => {
//     const deleteInfo = JSON.parse(data);
//     let deleteId = req.params.id.toString();

//     // filter thorugh array to find delete id, and push back new array (fs.writefile
//   });
// });

app.get('*', (req, res) => {
  res.redirect('index.html');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

//! grade requirements
// GIVEN a note-taking application
// WHEN I open the Note Taker
// ?THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// ? THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// ? THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// ? THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// ? THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// ?THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
