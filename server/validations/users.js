const Joi = require('joi');

module.exports = {
  register: {
    body: {
      firstName: Joi.string()
        .label('First Name')
        .required()
        .trim(),
      lastName: Joi.string()
        .label('Last Name')
        .required()
        .trim(),
      email: Joi.string()
        .label('Email')
        .required()
        .trim()
        .email(),
      password: Joi.string()
        .label('Password')
        .required()
        .trim()
        .min(8),
      passwordConfirmation: Joi.any()
        .valid(Joi.ref('password'))
        .required()
        .options({
          language: {
            any: {
              allowOnly: 'must match password'
            }
          }
        })
    }
  },
  login: {
    body: {
      email: Joi.string()
        .label('Email')
        .required()
        .trim()
        .email(),
      password: Joi.string()
        .label('Password')
        .required()
        .trim()
        .alphanum()
    }
  }
};
