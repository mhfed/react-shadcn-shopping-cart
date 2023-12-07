import Joi from 'joi'

export const formSignupSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required()
    .messages({
      'string.email': 'Email is invalid format',
      'any.required': 'Email is required'
    }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required'
  })
})
