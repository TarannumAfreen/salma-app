const mongoose = require('mongoose');

const economySchema = mongoose.Schema({
  sector: {
    type: String,
    required: true,
  },
  growth: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Economy', economySchema);
