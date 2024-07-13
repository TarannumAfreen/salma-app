const Economy = require('../models/Economy');

const getEconomy = async (req, res) => {
  try {
    const economy = await Economy.find();
    res.json(economy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEconomy = async (req, res) => {
  const { sector, growth } = req.body;

  const newEconomy = new Economy({ sector, growth });

  try {
    const savedEconomy = await newEconomy.save();
    res.status(201).json(savedEconomy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getEconomy,
  createEconomy,
};
