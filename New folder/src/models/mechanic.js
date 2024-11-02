const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mechanicSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true,
    enum: ['Dashboard', 'Suspension', 'Engine', 'Transmission', 'Brakes', 'Electrical', 'Bodywork']
  }
}, {
  timestamps: true
});

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

module.exports = Mechanic;
