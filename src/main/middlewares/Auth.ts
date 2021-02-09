import {NextFunction, Request, Response} from "express";
import {verifyTokenSchema} from "../schemas/Example";
import Helpers from "../utils/helpers/Helpers";
import {Response as Resp} from "../utils/helpers/Response";
import S from "../utils/helpers/Status";
import Token from "../utils/helpers/Token";

class AuthMiddleware {

  public async verifyToken (req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization;
      if (!token) {
        const {_, result} = await Helpers.validateBody(verifyTokenSchema, {token: token});
        return res.status(S.BAD_REQUEST).send(result);
      }
      if (token.split(" ")[0].toLowerCase() === "bearer") {
        token = token.split(" ")[1];
      }
      const decode: string = Token.verifyToken(token, true).toString();
      if (decode.toLowerCase().includes("jsonwebtokenerror")) {
        const message = decode.split(": ")[1];
        return res.status(S.BAD_REQUEST).send(Resp.badrequest(message));
      }
      req.app.locals.credentials = {user: decode};
      next();
    } catch (error) {
      return error;
    }
  }

}

export default new AuthMiddleware();
