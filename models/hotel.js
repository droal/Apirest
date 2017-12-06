'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var hotelSchema = new Schema(
  {
    name : {type: String},
    stars : {type: Number},
    cost : {type: Number},
    photo :{type: String},
    commentaries: {type: String},
    location: {type:String}
  }
);

module.exports = mongoose.model('Hotel', hotelSchema);
