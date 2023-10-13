import { usersRouter } from "routers";
import express, { Express } from "express";
import { connectDb, disconnectDB } from "config";

const app = express();

app
    .use(express.json())
    .use("/users", usersRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
