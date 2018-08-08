import Track from '../models/Track';
import { TrackRepository, trackRepositoryFirebase } from '../repositories/TrackRepository';

export interface TrackService {
  getTracks(): Promise<Array<Track>>;
}

export class TrackServiceImpl implements TrackService {
  private trackRepository: TrackRepository;

  constructor(trackRepository: TrackRepository) {
    this.trackRepository = trackRepository;
  }

  public getTracks(): Promise<Array<Track>> {
    return this.trackRepository.getAll()
  }
}

export const trackService = new TrackServiceImpl(trackRepositoryFirebase)