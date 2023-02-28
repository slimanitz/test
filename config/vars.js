require('dotenv').config();

const { env } = process;

module.exports = {
  mongoUrl: env.MONGO_URL,
};
