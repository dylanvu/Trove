const Joi = require('joi');

module.exports = {
  list: {
    body: {
      name: Joi.string()
        .label('Name')
        .required()
        .trim(),
      shared: Joi.boolean()
        .label('Shared')
        .required(),
      emails: Joi.array()
        .when('shared', {
          is: true,
          then: Joi.required()
        })
    }
  }
};
