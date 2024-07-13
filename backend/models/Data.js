const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Data', dataSchema);
