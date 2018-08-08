import * as express from 'express';

export default interface RegisterableController {
  register(app: express.Application): void
}