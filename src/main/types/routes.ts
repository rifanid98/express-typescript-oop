import {Router} from "express";

export interface IRoutes {
  router: Router
  routes(): void
}
