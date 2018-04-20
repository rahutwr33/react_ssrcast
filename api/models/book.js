var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  isbn: {
    type: String,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  publisher: {
    type: String,
  }
});

module.exports = mongoose.model('Book', BookSchema);
