const Intelligence = require('../models/Intelligence');

const getIntelligence = async (req, res) => {
  try {
    const intelligence = await Intelligence.find();
    res.json(intelligence);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createIntelligence = async (req, res) => {
  const { metric, analysis } = req.body;

  const newIntelligence = new Intelligence({ metric, analysis });

  try {
    const savedIntelligence = await newIntelligence.save();
    res.status(201).json(savedIntelligence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getIntelligence,
  createIntelligence,
};
