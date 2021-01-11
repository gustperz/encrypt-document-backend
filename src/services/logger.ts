import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'app.log' })],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}

type Reqs = {
  method: string;
  url: string;
  reqBody: any;
  resBody: any;
};

export function logReqs({ method, url, reqBody, resBody }: Reqs) {
  logger.info(`HTTP ${method} ${url}`, { reqBody, resBody, date: new Date() });
}
