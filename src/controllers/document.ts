import { Request, Response } from 'express';

export function validate(req: Request, res: Response) {
  const { body: reqBody, method, url } = req;
  const { document, name } = reqBody;

  const success = !!document && !!name;
  const message = success ? '¡DATOS RECIBIDOS!' : '¡DATOS INCORRECTOS!';
  const resBody = { message, success };

  res.json(resBody);
}
