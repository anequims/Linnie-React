const exploreModel = require('../models/exploreModel');

const getAll = async (_request, response) => {
  const model = await exploreModel.getAll();
  return response.status(200).json(model);
};

module.exports = {
    getAll
  };