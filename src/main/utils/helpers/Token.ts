import jwt from "jsonwebtoken";

class Token {

  /**
   * Generate JWT Token
   * 
   * @param {object} data user data or other data
   * @returns any
   */
  public generateToken(data: object) {
    try {
      if (typeof data != "object") {
        return "data must be an object";
      }
      if (Array.isArray(data)) {
        return "data must be an object";
      }
  
      const secret: string = process.env.JWT_SECRET || "mysecret";
      const token = jwt.sign({...data}, secret, {expiresIn: "7d"});
      const verify = this.verifyToken(token);
      if (!verify) {
        return "Generate token failed. Cannot verify generated token.";
      }
      return token;
    } catch (error) {
      return error;
    }
  }

  /**
   * Verify JWT Token
   * 
   * @param {string} token jsonwebtoken
   * @param {boolean} decode decode data
   * @returns any
   */
  public verifyToken(token: string, decode?: boolean) {
    try {
      const secret: string = process.env.JWT_SECRET || "mysecret"
      const verify = jwt.verify(token, secret);
      if (!verify) {
        return false;
      }
      if (!decode) {
        return true;
      }
      return verify;
    } catch (error) {
      return error;
    }
  }

}

export default new Token();