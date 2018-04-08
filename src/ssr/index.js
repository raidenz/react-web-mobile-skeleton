require('dotenv').config();
import 'ignore-styles';
import express from 'express';
import reactLoadable from 'react-loadable';
import path from 'path';
import fs from 'fs';

import universal from './universal';

const PORT = process.env.REACT_APP_SERVER_PORT || '8080'

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../..', 'build/static')));
app.use('/public', express.static(path.resolve(__dirname, '../..', 'public')));

app.get('/', universal);

reactLoadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`);
  });
});

