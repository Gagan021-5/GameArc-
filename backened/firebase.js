
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, 'firebase-private-key.json'))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
