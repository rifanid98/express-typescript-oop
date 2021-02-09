import FormValidation from "./FormValidation";
import { Response } from "./Response";
import {Object, Body, ResponseData} from "./types";

class Helpers {

  /**
   * Validate payload body
   * 
   * @param {{}}} schema 
   * @param {{}} body 
   */
  static async validateBody(schema: Object, body: Body, fieldsToPatch?: string[]): Promise<any> {
    if (fieldsToPatch) {
      return this.validateBodyPartial(schema, body, fieldsToPatch);
    } else {
      return this.validateBodyFull(schema, body);
    }
  }

  /**
   * Validate payload body
   * 
   * @param {{}}} schema 
   * @param {{}} body 
   */
  protected static async validateBodyPartial(schema: Object, body: Body, fieldsToPatch: string[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const formValidation = new FormValidation(schema, body, fieldsToPatch);
      const validation: ResponseData = await formValidation.dynamic()
      if (validation.invalid) {
        const message = validation.message;
        resolve({
          invalid: true,
          result: Response.badrequest(message)
        })
      } 
      resolve(true);
    })
  }

  /**
   * Validate payload body
   * 
   * @param {{}}} schema 
   * @param {{}} body 
   */
  protected static async validateBodyFull(schema: Object, body: Body): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const formValidation = new FormValidation(schema, body);
      const validation: ResponseData = await formValidation.static()
      if (validation.invalid) {
        const message = validation.message;
        resolve({
          invalid: true,
          result: Response.badrequest(message)
        })
      } 
      resolve(true);
    })
  }
  
}

export default Helpers;