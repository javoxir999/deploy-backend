const express = require('express');
const serverless = require('serverless-http');

const app = express();

const movies = [
  { id: 1, title: "Muqaddima", genre: "Ilmiy-fantastika", year: 2010 },
  { id: 2, title: "Qora ritsar", genre: "Jangari", year: 2008 },
  { id: 3, title: "Yulduzlararo", genre: "Ilmiy-fantastika", year: 2014 },
  { id: 4, title: "Matritsa", genre: "Ilmiy-fantastika", year: 1999 },
  { id: 5, title: "Kriminal asar", genre: "Kriminal", year: 1994 }
];

app.get('/.netlify/functions/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/.netlify/functions/api', (req, res) => {
  res.json({ message: "Express router-siz muvaffaqiyatli ishlayapti!" });
});

module.exports.handler = serverless(app);
