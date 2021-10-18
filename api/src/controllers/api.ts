import { Application, Request, Response } from "express";

import CountriesData from "../../data/countries.json";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    return res.status(200).send(CountriesData);
  });
};
