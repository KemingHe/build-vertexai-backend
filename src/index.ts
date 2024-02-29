// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Set up a minimal Exp server on localhost,
// and load all env var from file to process.env: 
dotenv.config();

const app: Express  = express();
const port = process.env.PORT || 3000;

// Def root path route:
app.get("/", (req: Request, res: Response) => {
  res.send("This will change in real-time!");
});

// Start Exp app and listen at port:
app.listen(port, () => {
  console.log(`[server]: Express server running at port: ${port}`);
});

