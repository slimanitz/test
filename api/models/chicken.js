const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const mongoClient = require('../../config/database');

const chickenSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    weight: { type: Number, required: true },
    steps: { type: Number, default: 0 },
    isRunning: { type: Boolean, default: false },

  },
  { timestamps: true },
);

const Chicken = mongoose.model('chicken', chickenSchema);

module.exports = Chicken;
