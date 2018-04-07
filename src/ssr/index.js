import 'ignore-styles';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import reactLoadable from 'react-loadable';
import { Helmet } from 'react-helmet';
import browser from 'browser-detect';


import path from 'path';
import fs from 'fs';

import App from 'App';

const PORT = '8080'

const app = express();
const context = {};

app.use('/static', express.static(path.resolve(__dirname, '../..', 'build/static')));
app.use('/public', express.static(path.resolve(__dirname, '../..', 'public')));

app.get('/', (req, res) => {
  const browserVal = browser(req.headers['user-agent']);
  console.log(browserVal);
  let importStyle;
  if (browserVal.mobile) {
    importStyle = 'mobile-style.css'
  } else {
    importStyle = 'web-style.css'
  }

  const filePath = path.resolve(__dirname, '../..', 'build', 'asset-manifest.json');
  const helmet = Helmet.renderStatic();

  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) {
      // if build not exist
      console.error('read err', err)
      return res.status(404).end()
    }
    const assets = JSON.parse(jsonData)
    const { 'main.css': maincss, 'main.js': mainjs } = assets;

    const ReactApp = ReactDOMServer.renderToString(
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App />
      </StaticRouter>
    );
    res.send(`<!doctype html>
<html lang="en">
  <head>
    ${helmet.title && helmet.title.toString()}
    ${helmet.meta && helmet.meta.toString()}
    <link rel="stylesheet" href="public/css/${importStyle}"/>
  </head>
  <body>
    <div id="root">${ReactApp}</div>
    <script src="${mainjs}"></script>
  </body>
</html>`);
  });
});

reactLoadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`);
  });
});

/**
 * TODO
 * Import style manualy by device
 */
