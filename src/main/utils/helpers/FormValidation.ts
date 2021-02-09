import Joi from "joi";
import _ from "lodash";
import {ResponseData, Field, Schema, Body, Object} from "./types";

/**
 * Custom Joi Error Handling
 * 
 * @param {string} error 
 * @returns {string}
 */
function joiError(error = "") {
	if (error) {
		return error.split(': ').pop();
	}

	return error;
}

/**
 * Template response, agar bisa menerapkan named argument di javascript
 * 
 * @param {object} data 
 * @returns {object}
 */
function response(data: ResponseData) {
	data.valid = data.valid ? data.valid : false;
	data.invalid = data.invalid ? data.invalid : false;
	data.message = data.message ? data.message : "";

	return data;
}

class FormValidation {
	private field?: Field;
	private fields: Body;
	private schema: Schema;

	constructor(schema: Schema, fields: Body, field?: Field) {
		this.field = field;
		this.fields = fields;
		this.schema = schema;
	}

	/**
	 * Validate whether the sent payload data 
	 * is the same as the predetermined scheme
	 */
	validate() {
		const schemaKeys: string[] = Object.keys(this.schema).sort();
		const fieldsKeys: string[] = Object.keys(this.fields).sort();
		
		schemaKeys.sort();
		fieldsKeys.sort();

		const match: boolean = _.isEqual(schemaKeys, fieldsKeys);
		if (!match) {
			return response({invalid: true, message: `Field does not match! Required fields: ${schemaKeys} but got: ${fieldsKeys}`});
		} else {
			return response({valid: true});
		}
	}

	/** 
	 * Use this code to validate full of fields you created
	 * 
	 * const valid = await new FormValidation(loginSchema, body);
	 * if (valid) // your code
	 */
	async static() {

		const validation = this.validate();
		if (validation.invalid) return response(validation);

		const errors: any[] = [];
		
		const schemas: string[] = Object.keys(this.schema);
		const fields: string[] = Object.keys(this.fields);
		
		schemas.sort();
		fields.sort();

		for (let i = 0; i < schemas.length; i++) {
			const schema: Object = {[schemas[i]]: this.schema[schemas[i]]};
			const field: Object = {[fields[i]]: this.fields[fields[i]]};

			const validate: Promise<any> = Joi.object(schema).validateAsync(field);
			
			const check: ResponseData = await validate.then(() => {
				return response({
					valid: true
				});
			}).catch(error => {
				return response({
					invalid: true, 
					message: joiError(error.toString())
				});
			})
			
			if (check.invalid) {
				errors.push(check.message);
			}
		}

		if (errors.length > 0) {
			return response({invalid: true, message: errors});
		}
		
		const validate = Joi.object(this.schema).validateAsync(this.fields);
		return validate.then(() => {
			return response({valid: true});
		}).catch(error => {
			return response({
				invalid: true, 
				message: joiError(error.toString())
			});
		})
	}

	/**
	 * Use this code to dynamic validation of your custom fields.
	 * Use this code to validate some of fields.
	 * 
	 * const body = req.body;
	 * const fieldToPatch = Object.keys(body);
	 * 
	 * const valid = await new FormValidation(loginSchema, body, fieldToPatch);
	 * if (valid) //your code
	 */
	dynamic() {
		const dynamicSchema = Object.keys(this.schema)
			.filter(key => this.field?.includes(key))
			.reduce((obj: Object, key) => {
				obj[key] = this.schema[key];
				return obj;
			}, {});
		
		const validate = Joi.object(dynamicSchema).validateAsync(this.fields);
		return validate.then(() => {
			return response({valid: true});
		}).catch(error => {
			return response({invalid: true, message: joiError(error.toString())});
		})
	}
}

export default FormValidation;