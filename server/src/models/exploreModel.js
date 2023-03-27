const connection = require('./connection');

const getAll = async () => {
    const [model] = await connection.execute('SELECT * FROM models');
    return model;
};
module.exports = {
    getAll
  };