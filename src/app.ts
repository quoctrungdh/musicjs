import * as express from 'express';

import { trackController } from './controllers/TrackControler';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initRoutes();
  }

  private initRoutes(): void {
    trackController.register(this.app)
  }

}

export default new App().app;