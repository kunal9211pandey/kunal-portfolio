import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import contactRouter from "./routes/contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form route
  app.use(contactRouter);

  const httpServer = createServer(app);

  return httpServer;
}
