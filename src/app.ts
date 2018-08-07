import * as express from 'express';
const db = require('./firebase').db;

function getAllTracks() {
  return new Promise((resolve, reject) => {
    db.collection('tracks')
      .get()
      .then((snapshot) => {
        const raw = snapshot.docs.map(s => s.data())
        resolve(raw)
      })
      .catch(err => { throw err; })
  })
}

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initRoutes();
  }

  private initRoutes(): void {
    const router = express.Router();

    router.get('/', async(req, res) => {
      const s = await getAllTracks();

      res.status(200).send(s)
    })

    this.app.use('/', router)
  }

}

export default new App().app;