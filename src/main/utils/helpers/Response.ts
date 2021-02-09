import Status from "./Status";

interface IResponse {
  status: number,
  message?: Message,
  data?: object | any[],
  error?: Error,
  total?: number
}

type Success = {
  message?: string, 
  data?: any[] | object, 
  total?: number
}

type Created = {
  message?: string, 
  data?: any[] | object
}

type Error = string | any | any[];
type Message = string | any | any[];

class Response {

  static resp: IResponse;

  /**
   * Created Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static created(param?: Created) {
    this.clear();
    this.resp.status = Status.CREATED;
    this.resp.message = param?.message ? param.message : "Created";
    param?.data ? (this.resp.data = param.data) : false;
    return this.resp;
  }

  /**
   * Success Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static success(param?: Success) {
    this.clear();
    this.resp.status = Status.SUCCESS;
    this.resp.message = param?.message ? param.message : "Success";
    param?.data ? (this.resp.data = param.data) : false;
    param?.total ? (this.resp.total = param.total) : false;
    return this.resp;
  }

  /**
   * Error Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static error(error?: Error) {
    this.clear();
    this.resp.status = Status.ERROR;
    this.resp.error = error ? error : "Internal Server Error";
    return this.resp
  }

  /**
   * Bad Request Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static badrequest(message?: Message) {
    this.clear();
    this.resp.status = Status.BAD_REQUEST;
    this.resp.message = message ? message : "Bad Request";
    return this.resp;
  }

  /**
   * Not Found Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static notfound(message?: Message) {
    this.clear();
    this.resp.status = Status.NOT_FOUND;
    this.resp.message = message ? message : "No Data Found";
    return this.resp;
  }

  /**
   * Unauthorized Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static unauthorized(message?: Message) {
    this.clear();
    this.resp.status = Status.UNAUTHORIZED;
    this.resp.message = message ? message : "Unauthorized";
    return this.resp;
  }

  /**
   * Forbidden Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static forbidden(message?: Message) {
    this.clear();
    this.resp.status = Status.FORBIDDEN;
    this.resp.message = message ? message : "Forbidden";
    return this.resp;
  }

  /**
   * Conflict Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static conflict(message?: Message) {
    this.clear();
    this.resp.status = Status.CONFLICT;
    this.resp.message = message ? message : "Conflict";
    return this.resp;
  }

  /**
   * Gone Response
   * 
   * @param {object} {message?, data?} 
   * @returns {object}
   */
  static gone(message?: Message) {
    this.clear();
    this.resp.status = Status.GONE;
    this.resp.message = message ? message : "Created";
    return this.resp;
  }

  /**
   * Clearing response for new use
   */
  static clear() {
    this.resp = {status: 0};
  }

}

export {IResponse,Response}