var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: {
    type: String,
  },
  subject: {
    type: String,
  },
  article: {
    type: String,
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
