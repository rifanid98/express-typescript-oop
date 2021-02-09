import {Request, Response} from "express";
import Helpers from "../utils/helpers/Helpers";
import {
  exampleGetSchema, 
  examplePostSchema, 
  exampleUpdateSchema, 
  exampleDeleteSchema
} from "../schemas/Example";
import ExampleService from "../services/Example";
import Token from "../utils/helpers/Token";
import S from "../utils/helpers/Status";
import {Response as Resp} from "../utils/helpers/Response";

class ExampleController {

  table = "";

  constructor(table = "") {
    this.table = table;
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleLogin(req: Request, res: Response) {
    try {
      const token = Token.generateToken({field: "value"});
      return res.status(S.SUCCESS).send(Resp.success({data: {token}}));
    } catch (error) {
      return Resp.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleGet(req: Request, res: Response) {
    try {
      const query = req.query;

      const {invalid, result} = await Helpers.validateBody(exampleGetSchema, query);
      if (invalid) return res.status(result.status).send(result);

      const get = await ExampleService.exampleGet();
      return res.status(get.status).send(get);
    } catch (error) {
      return Resp.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route POST /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async examplePost(req: Request, res: Response) {
    try {
      const body = req.body;

      const {invalid, result} = await Helpers.validateBody(examplePostSchema, body);
      if (invalid) return res.status(result.status).send(result);

      const post = await ExampleService.examplePost(body);
      return res.status(post.status).send(post);
    } catch (error) {
      return Resp.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route POST /example/:id
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleUpdate(req: Request, res: Response) {
    try {
      const body = req.body;
      const id = Number(req.params.id);

      const {invalid, result} = await Helpers.validateBody(exampleUpdateSchema, body);
      if (invalid) return res.status(result.status).send(result);

      const update = await ExampleService.exampleUpdate(body, id);
      return res.status(update.status).send(update);
    } catch (error) {
      return Resp.error({error});
    }
  }

  /**
   * Test Method for test route
   * @route GET /example
   * @param {*} req Express.Request
   * @param {*} res Exprees.Response
   */
  async exampleDelete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const {invalid, result} = await Helpers.validateBody(exampleDeleteSchema, {id});
      if (invalid) return res.status(result.status).send(result);

      const delete_ = await ExampleService.exampleDelete(id);
      return res.status(delete_.status).send(delete_);
    } catch (error) {
      return Resp.error({error});
    }
  }

}

export default new ExampleController("Examples");