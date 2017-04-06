const Joi = require('joi');

module.exports = {
  bookmark: {
    body: {
      url: Joi.string()
        .label('url')
        .required()
        .trim(),
      listId: Joi.number()
        .label('List Id')
        .required()
    }
  }
};
