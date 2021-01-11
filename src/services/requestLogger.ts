import express from 'express';

import morganBody, { IMorganBodyOptions } from 'morgan-body';
import fs from 'fs';

export default function requestLogger(app: express.Application) {
  const options: IMorganBodyOptions = {
    skip: (req) => req.method === 'OPTIONS',
  };

  if (process.env.NODE_ENV !== 'production') {
    morganBody(app, options);
  }

  const stream = fs.createWriteStream('express.log', { flags: 'a' });
  morganBody(app, { ...options, noColors: true, logReqUserAgent: false, stream });
}
