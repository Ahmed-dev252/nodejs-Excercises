


const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author : String,
  publishedYear : Number,
  genre : String
});

module.exports = mongoose.model('book', bookSchema);
