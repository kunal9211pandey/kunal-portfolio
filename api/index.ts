import { app, registerPromise } from '../server/app';

export default async function handler(req, res) {
  // Ensure routes are registered before handling the request
  await registerPromise;
  
  // Forward the request to the Express app
  app(req, res);
}
