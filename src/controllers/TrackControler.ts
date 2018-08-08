import * as express from 'express';

import { TrackService, trackService } from '../services/TrackService';
import RegisterableController from './RegisterableController'

export default class TrackController implements RegisterableController {
  private trackService;

  constructor(trackService: TrackService) {
    this.trackService = trackService;
  }

  public register(app: express.Application): void {
    app.route('/tracks')
      .get(async(req, res, next) => {
        try {
          const tracks = await this.trackService.getTracks();
          res.json(tracks);
        } catch (error) {
          next(error);
        }
      })
  }
}

export const trackController = new TrackController(trackService);
