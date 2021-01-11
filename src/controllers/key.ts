import { Request, Response } from 'express';
import { constants } from '../utils/config';

export function getPublicKey(req: Request, res: Response) {
  res.json({ public_key: constants.PUBLIC_KEY });
}
