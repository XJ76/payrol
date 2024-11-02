const Mechanic = require('../models/mechanic');

// Create a new mechanic
exports.createMechanic = async (req, res) => {
  try {
    const mechanic = new Mechanic(req.body);
    await mechanic.save();
    res.status(201).send(mechanic);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all mechanics
exports.getAllMechanics = async (req, res) => {
  try {
    const mechanics = await Mechanic.find({});
    res.status(200).send(mechanics);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a mechanic by ID
exports.getMechanicById = async (req, res) => {
  try {
    const mechanic = await Mechanic.findById(req.params.id);
    if (!mechanic) {
      return res.status(404).send();
    }
    res.status(200).send(mechanic);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a mechanic by ID
exports.updateMechanicById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'specialization'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const mechanic = await Mechanic.findById(req.params.id);
    if (!mechanic) {
      return res.status(404).send();
    }

    updates.forEach((update) => (mechanic[update] = req.body[update]));
    await mechanic.save();
    res.status(200).send(mechanic);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a mechanic by ID
exports.deleteMechanicById = async (req, res) => {
  try {
    const mechanic = await Mechanic.findByIdAndDelete(req.params.id);
    if (!mechanic) {
      return res.status(404).send();
    }
    res.status(200).send(mechanic);
  } catch (error) {
    res.status(500).send(error);
  }
};
