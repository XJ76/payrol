const Booking = require('../models/booking');

const createBooking = async (req, res) => {
  try {
    const { carRegNumber, make, model, ownerName, cost, estimatedCompletionDate } = req.body;

    if (!carRegNumber || !make || !model || !ownerName || !cost || !estimatedCompletionDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({
      carRegNumber,
      make,
      model,
      ownerName,
      cost,
      estimatedCompletionDate
    });

    await newBooking.save();

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { carRegNumber, make, model, ownerName, cost, estimatedCompletionDate } = req.body;

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.carRegNumber = carRegNumber || booking.carRegNumber;
    booking.make = make || booking.make;
    booking.model = model || booking.model;
    booking.ownerName = ownerName || booking.ownerName;
    booking.cost = cost || booking.cost;
    booking.estimatedCompletionDate = estimatedCompletionDate || booking.estimatedCompletionDate;

    await booking.save();

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await booking.remove();

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  deleteBooking
};

