const express = require('express');
const notes = require('./data/notes.js');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// API end Point
app.get("/", (req, res) => {
    res.send("API is Running")
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
    const curNote = notes.find((n) => n._id === req.params.id);
    res.send(curNote);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server connected at ${PORT}`));