import { NextFunction, Request, Response } from "express";

export default function errorHandling(
  error: any,
  req: Request,
  res: Response,
  _: NextFunction
) {
  res
    .status(500)
    .send({ error: "internal server error", message: error.message });
}
