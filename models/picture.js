const mongoose = require('mongoose');

module.exports = mongoose.model('Picture', {
  Url: String,
  Channel: String,
});
