import express from 'express';
import bodyParser from 'body-parser';
import requestLogger from './services/requestLogger';

export default class App {
  public app: express.Application;

  constructor(router: express.Router) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes(router);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    requestLogger(this.app)
  }

  private initializeRoutes(router: express.Router) {
    this.app.use('/', router);
  }

  public start(port: string) {
    this.app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
  }
}
