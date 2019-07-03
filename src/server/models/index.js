"use strict"

const Sequelize = require('sequelize');

const DATABASE = 'tttgalaxy'
const DATABASE_USER = 'postgres'
const DATABASE_PASSWORD = 'abcd1234'

const sequelize = new Sequelize(
  process.env.DATABASE || DATABASE,
  process.env.DATABASE_USER || DATABASE_USER,
  process.env.DATABASE_PASSWORD || DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: sequelize.import('./user.model')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  models,
  sequelize
};