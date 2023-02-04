import Joi from 'joi';
import {UserSignInDto} from './../common/types';
import {validateEmail} from './validate-email';
import {errors} from './errors';

export const loginRules = Joi.object<UserSignInDto>({
  email: Joi.string()
    .email({tlds: {allow: false}})
    .required()
    .custom(validateEmail)
    .messages({
      'string.empty': `${errors.EMPTY}`,
    }),
  password: Joi.string()
    .required()
    .min(8)
    .messages({
      'string.empty': `${errors.EMPTY}`,
      'string.min': `${errors.MIN_PASSWORD}`,
    }),
});
