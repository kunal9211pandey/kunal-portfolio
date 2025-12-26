// Production server entry point for Vercel deployment
// This file is bundled by esbuild and used for serverless function deployment

import express from "express";
import { createServer } from "http";
import type { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Create Express app and HTTP server
const app = express();
const httpServer = createServer(app);

// Middleware setup
app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }

      log(logLine);
    }
  });

  next();
});

// Global state for routes initialization
let routesInitialized = false;
let routesInitPromise: Promise<void> | null = null;

// Initialize routes (idempotent)
async function initializeRoutes() {
  if (routesInitialized) return;
  if (routesInitPromise) return routesInitPromise;

  routesInitPromise = registerRoutes(httpServer, app).then(() => {
    routesInitialized = true;
  });

  return routesInitPromise;
}

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
});

// Serverless function handler for Vercel
export async function handler(req: Request, res: Response) {
  try {
    // Ensure routes are initialized before handling any request
    await initializeRoutes();

    // Forward the request to Express app
    app(req, res);
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// For local development: create a server instance
async function startLocalServer() {
  try {
    await initializeRoutes();

    const port = parseInt(process.env.PORT || "5000", 10);
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
        reusePort: true,
      },
      () => {
        log(`serving on port ${port}`);
      },
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

// Only start local server in development (when running directly, not as a serverless function)
if (process.env.NODE_ENV === "production" && !process.env.VERCEL) {
  startLocalServer();
} else if (process.env.NODE_ENV !== "production") {
  startLocalServer();
}

export default handler;
