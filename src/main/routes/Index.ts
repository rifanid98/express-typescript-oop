import {Router} from "express";
import {IRoutes} from "../types/index";
import Example from "./Example";

class AppRouter implements IRoutes {
  
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
    this.router.use('/example', Example);
  }

}

export default new AppRouter().router;