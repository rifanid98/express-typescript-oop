import {Router} from "express";
import {IRoutes} from "../types/index";

/** Controllers */
import ExampleController from "../controllers/Example";

// /** Middleware */
import AuthMiddleware from "../middlewares/Auth";

class ExampleRouter implements IRoutes {
  
  public router: Router;
  /**
   * Init express.Router inistance 
   * and use the routes
   */
  constructor() {
    this.router = Router()
    this.routes();
  }

  /**
   * Routes
   */
  public routes() {
    this.router.get('/login', ExampleController.exampleLogin);
    this.router.get('/',      AuthMiddleware.verifyToken, ExampleController.exampleGet);
    this.router.post('/',     AuthMiddleware.verifyToken, ExampleController.examplePost);
    this.router.put('/:id',   AuthMiddleware.verifyToken, ExampleController.exampleUpdate);
    this.router.delete('/:id',AuthMiddleware.verifyToken, ExampleController.exampleDelete);
  }

}

export default new ExampleRouter().router;