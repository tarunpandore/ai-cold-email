import dotenv from "dotenv";
dotenv.config(); // must be first

import { app } from "./app";
import { prisma } from "./config/prisma";
import { env } from "./config/env";

const PORT = env.PORT;

async function startServer() {
  try {
    await prisma.$connect();
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

startServer();