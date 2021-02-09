import {Request, Response} from "express";

export interface IController {
  index?(req: Request, res: Response): Promise<Response> | Response | any | void;
  create?(req: Request, res: Response): Promise<Response> | Response | any | void;
  show?(req: Request, res: Response): Promise<Response> | Response | any | void;
  update?(req: Request, res: Response): Promise<Response> | Response | any | void;
  delete?(req: Request, res: Response): Promise<Response> | Response | any | void;
}

export type ExampleData = {
  email: string,
  phone: string
}

export type TChat = {
  find?: string,
  page?: number
}


export type TCategory = {
  limit?: number
}

