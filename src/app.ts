import express, { Application } from "express";
import mongoose from "mongoose";
import v1Router from "./v1/routes";

class App {
  public app: Application;

  private configureApp(): void {
    this.app.use(express.json());
  }

  private async connectDB(): Promise<void> {
    try {
      await mongoose.connect("", {});
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(`MongoDB connection error: ${error}`);
      process.exit(1);
    }
  }

  private setupRoutes(): void {
    this.app.use("/api/v1", v1Router);
    this.app.use("/api/v2");
  }

  constructor() {
    this.app = express();
    this.connectDB();
    this.configureApp();
    this.setupRoutes();
  }
}
