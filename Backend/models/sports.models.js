const mongoose = require('mongoose');

const sportsFormSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    default: 'none',
  },
  sport: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: false,
  },
});

const SportsNews = mongoose.model('sportsNews', sportsFormSchema);

module.exports = SportsNews;
