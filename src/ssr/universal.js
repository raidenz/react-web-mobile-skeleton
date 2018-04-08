import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import browser from 'browser-detect';
import path from 'path';
import fs from 'fs';

import App from 'App';

const context = {};
export default (req, res) => {
  const browserVal = browser(req.headers['user-agent']);
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
};
