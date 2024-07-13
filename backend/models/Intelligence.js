const mongoose = require('mongoose');

const intelligenceSchema = mongoose.Schema({
  metric: {
    type: String,
    required: true,
  },
  analysis: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Intelligence', intelligenceSchema);
