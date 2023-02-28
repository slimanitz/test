const httpStatus = require('http-status');
const Joi = require('joi');
const Chicken = require('../models/chicken');
const APIError = require('../../utils/api-error');

const schema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.date().required(),
  weight: Joi.number().required(),
  steps: Joi.number(),
  isRunning: Joi.boolean(),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  birthday: Joi.date(),
  weight: Joi.number(),
  steps: Joi.number(),
  isRunning: Joi.boolean(),
});

const create = async (chicken) => {
  const { error, value } = schema.validate(chicken);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const newChicken = new Chicken(value);
  await newChicken.save();
  return newChicken;
};

const get = async (id) => {
  const chicken = await Chicken.findById(id);
  if (!chicken) throw new APIError('No chicken found', httpStatus.NOT_FOUND);
  return chicken;
};

const getAll = async () => {
  const chickens = await Chicken.find();
  return chickens;
};

const update = async (id, payload) => {
  const { error, value } = updateSchema.validate(payload);
  if (error) throw new APIError('Bad Payload', httpStatus.BAD_REQUEST);
  const updatedValue = await Chicken
    .findOneAndUpdate({ _id: id }, { $set: { ...value } }, { new: true });
  if (!updatedValue) throw new APIError('Not Found', httpStatus.NOT_FOUND);
  return updatedValue;
};

const remove = async (id) => {
  const chicken = await get(id);
  if (!chicken) throw new APIError('No such chicken', httpStatus.NOT_FOUND);
  await Chicken.findByIdAndDelete(id);
};

const run = async (id) => {
  const chicken = await get(id);
  if (!chicken) throw new APIError('No such chicken', httpStatus.NOT_FOUND);
  chicken.isRunning = true;
  await chicken.save();
  chicken.steps += 1;
  chicken.isRunning = false;
  await chicken.save();
  return chicken;
};

module.exports.chickenService = {
  create,
  get,
  getAll,
  update,
  remove,
  run,
};
