const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newPriceSchema = new Schema({
  appDate: {
    type: Date, 
    default: Date.now ,
    required: true
  },

  appTime: {
    type: Number, 
    default: (new Date()).getTime(),
    required: true
  },
  Gasoline80: {
    type: Number,
    required: true
  },
  Gasoline92: {
    type: Number,
    required: true
  },
  Gasoline95: {
    type: Number,
    required: true
  },
  Diesel: {
    type: Number,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('NewPRice', newPriceSchema);