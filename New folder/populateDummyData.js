const mongoose = require('mongoose');
const Booking = require('./src/models/booking');
const Mechanic = require('./src/models/mechanic');
const User = require('./src/models/user');
const dbConnect = require('./config/dbConnect');

// Connect to the database
dbConnect()
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Dummy data
const bookings = [
  { carRegNumber: 'ABC123', make: 'Toyota', model: 'Corolla', ownerName: 'John Doe', cost: 150, estimatedCompletionDate: new Date('2024-12-15') },
  { carRegNumber: 'XYZ456', make: 'Honda', model: 'Civic', ownerName: 'Jane Smith', cost: 200, estimatedCompletionDate: new Date('2024-12-18') }
];

const mechanics = [
  { name: 'Mike Johnson', specialization: 'Engine' },
  { name: 'Sarah Lee', specialization: 'Transmission' }
];

const users = [
  { username: 'admin', password: 'admin123', email: 'admin@example.com', role: 'Admin' },
  { username: 'manager', password: 'manager123', email: 'manager@example.com', role: 'Manager' }
];

// Populate function
const populateData = async () => {
  try {
    await Booking.insertMany(bookings);
    await Mechanic.insertMany(mechanics);
    await User.insertMany(users);
    console.log('Dummy data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
};

populateData();
