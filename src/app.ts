import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
// To accept json on body post
app.use(express.json());

// app.use('/api/notes', notesRoutes);

app.use((req, res, next) => {
  next(Error("Not Found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
