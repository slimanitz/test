const httpStatus = require('http-status');
const { chickenService } = require('../services/chicken');

const create = async (req, res) => {
  const newchicken = await chickenService.create(req.body);
  res.status(httpStatus.OK).json(newchicken);
};

const getAll = async (req, res) => {
  const chickens = await chickenService.getAll();
  res.status(httpStatus.OK).json(chickens);
};

const get = async (req, res) => {
  const { id } = req.params;
  const chicken = await chickenService.get(id);
  res.status(httpStatus.OK).json(chicken);
};

const update = async (req, res) => {
  const { id } = req.params;
  const chicken = await chickenService.update(id, req.body);
  res.status(httpStatus.OK).json(chicken);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const chicken = await chickenService.remove(id);
  res.status(httpStatus.OK).json(chicken);
};

const run = async (req, res) => {
  const { id } = req.params;
  const chicken = await chickenService.run(id);
  res.status(httpStatus.OK).json(chicken);
};

module.exports = {
  create,
  get,
  getAll,
  run,
  update,
  remove,
};
