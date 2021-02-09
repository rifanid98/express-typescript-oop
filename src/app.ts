import express, {Application, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";
import {config as dotenv} from "dotenv";

import S from "./main/utils/helpers/Status";
import Routes from "./main/routes/Index";

class App {
  
  public app: Application;

  constructor() {
    this.app = express(); 
    this.plugins();
    this.routes();
    dotenv();
  }

  /**
   * Plugins
   */
  protected plugins(): void {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json())
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(compression());
  }

  /**
   * Routes
   */
  protected routes(): void {
    this.app.use("/v2", Routes);
    this.app.route("/").all((_, res: Response): Response => {
      return res.status(S.SUCCESS).send("Here we go again...");
    })
  }

}

export default App;