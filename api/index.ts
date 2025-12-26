import express from "express";
import { createServer } from "http";
import type { Request, Response } from "express";
import { registerRoutes } from "../server/routes";

declare global {
  var appInstance: any;
  var routesInitialized: boolean;
  var initPromise: Promise<void>;
}

// Singleton app instance
if (!global.appInstance) {
  global.appInstance = express();
  global.routesInitialized = false;
}

const app = global.appInstance;

async function ensureRoutesInitialized() {
  if (global.routesInitialized) return;
  if (global.initPromise) return global.initPromise;

  const httpServer = createServer(app);
  
  // Middleware
  app.use(
    express.json({
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );
  app.use(express.urlencoded({ extended: false }));

  // Initialize routes
  global.initPromise = registerRoutes(httpServer, app).then(() => {
    global.routesInitialized = true;
  });

  await global.initPromise;
}

// Vercel serverless handler
export default async function handler(req: Request, res: Response) {
  try {
    await ensureRoutesInitialized();
    return app(req, res);
  } catch (error) {
    console.error("Handler error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
