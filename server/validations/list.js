const Joi = require('joi');

module.exports = {
  list: {
    body: {
      name: Joi.string()
        .label('Name')
        .required()
        .trim()
    }
  }
};
