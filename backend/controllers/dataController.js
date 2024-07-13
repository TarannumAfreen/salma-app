const Data = require('../models/Data');

const getData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createData = async (req, res) => {
  const { name, value } = req.body;

  const newData = new Data({ name, value });

  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getData,
  createData,
};
