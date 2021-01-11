import { Request, Response } from 'express';
import { logReqs } from '../services/logger';

export function validate(req: Request, res: Response) {
  const { body: reqBody, method, url } = req;
  const { document, name } = reqBody;

  const success = !!document && !!name;
  const message = success ? '¡DATOS RECIBIDOS!' : '¡DATOS INCORRECTOS!';
  const resBody = { message, success };

  res.json(resBody);

  logReqs({ method, url, reqBody, resBody });
}
