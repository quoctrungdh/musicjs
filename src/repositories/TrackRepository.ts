import Track from '../models/Track';
import { fs } from '../utils/firebase';

export interface TrackRepository {
  getAll(): Promise<Array<Track>>
}
class TrackRepositoryFirebaseImpl implements TrackRepository {
  public getAll() {
    return fs.collection('tracks')
      .get()
      .then(snapshot => snapshot.docs.map(d => d.data()))
  }
}

export const trackRepositoryFirebase = new TrackRepositoryFirebaseImpl();