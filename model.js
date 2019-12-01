const mongoose = require('mongoose')
mongoose.connect('mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study');

let Model = mongoose.model('getir-case-study', {

  code: {
    type: String
  },

  msg:{
    type: String
  },

  records: {
    type: []
  }
});

module.exports = {
  Model: Model
}