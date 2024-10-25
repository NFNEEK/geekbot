import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import driftClient from "./driftClient"; // Assuming you export the client from driftClient.ts

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const initializeDrift = async () => {
  try {
    await driftClient.subscribe();
    console.log("Drift client connected");
  } catch (error) {
    console.error("Error initializing Drift client:", error);
  }
};

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeDrift();
});
