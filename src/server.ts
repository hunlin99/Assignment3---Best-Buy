import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Serve static files from /browser
 */
app.use(express.static(browserDistFolder, { maxAge: '1y', index: false, redirect: false }));

/**
 * Handle dynamic routes without prerendering
 */
app.get('/category/:name', (req, res) => {
  const categoryName = req.params.name;
  console.log(`Category: ${categoryName}`);

  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res); // Handle the response correctly
      } else {
        res.status(404).send('Page not found'); // Handle if no response
      }
    })
    .catch((error) => {
      res.status(500).send(error); // Handle errors
    });
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (response) {
        writeResponseToNodeResponse(response, res); // Handle the response correctly
      } else {
        next(); // Continue if no response
      }
    })
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
