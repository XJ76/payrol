const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth');
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require('../controllers/booking');
const { createMechanic, getAllMechanics, getMechanicById, updateMechanicById, deleteMechanicById } = require('../controllers/mechanic');

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);

// Booking routes
router.post('/bookings', createBooking);
router.get('/bookings', getBookings);
router.get('/bookings/:id', getBookingById);
router.put('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

// Mechanic routes
router.post('/mechanics', createMechanic);
router.get('/mechanics', getAllMechanics);
router.get('/mechanics/:id', getMechanicById);
router.put('/mechanics/:id', updateMechanicById);
router.delete('/mechanics/:id', deleteMechanicById);

module.exports = router;
