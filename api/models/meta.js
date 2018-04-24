var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var MetaSchema = new Schema({
  title: {
        type: String,
    },
    path: {
          type: String,
      },
    description: {
            type: String,
        },
    Keywords: {
        type: String,
    }
});



module.exports = mongoose.model('meta', MetaSchema);
