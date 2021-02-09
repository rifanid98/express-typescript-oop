import Joi from "joi";

/**
 * Create your own joi schema here.
 * Don't use Joi.object here! use plain object instead
 * 
 * import this schemas to your controller 
 * or models to start validate the data.
 * 
 * import FormValidation from 'path/to/utils/FormValidation.js';
 * import {loginSchema} from 'path/to/this/file/js';
 * 
 * const body = req.body;
 * // or
 * const body = {
 *      username: 'root',
 *      password: 'root'
 * }
 * const fieldToPatch = Object.keys(body);
 * const valid = new FormValidation(loginSchema, body)                  // static validation
 * const valid = new FormValidation(loginSchema, body, fieldToPatch)    // dynamic validation
 * 
 */
import {Schema} from "../types";

export const exampleGetSchema: Schema = {
	param1: Joi.string().valid("value1", "value2"),
	param2: Joi.string().valid("value1", "value2"),
};

export const examplePostSchema: Schema = {
	field1: Joi.string().required(),
	field2: Joi.string().required()
};

export const exampleUpdateSchema: Schema = {
	field1: Joi.string().required(),
	field2: Joi.string().required()
};

export const exampleDeleteSchema: Schema = {
	id: Joi.number().min(1).required()
};

export const verifyTokenSchema: Schema = {
	token: Joi.string().required()
}