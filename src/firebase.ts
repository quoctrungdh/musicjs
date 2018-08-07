const firebase = require('firebase');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const {
  apikey, authDomain, databaseURL, projectId, storageBucket
} = process.env;

const config = {
  apikey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket
}

firebase.initializeApp(config);

const fs = firebase.firestore();
fs.settings({ timestampsInSnapshots: true });

module.exports = {
  db: fs
};