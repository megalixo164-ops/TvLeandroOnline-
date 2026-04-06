import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  const PIXEL_ID = "949846511038402";
  const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

  app.use(express.json());

  // Facebook Conversions API Endpoint
  app.post("/api/fb-event", async (req, res) => {
    const { eventName, eventId, customData } = req.body;

    if (!FB_ACCESS_TOKEN) {
      console.error("FB_ACCESS_TOKEN is not configured.");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          user_data: {
            client_ip_address: Array.isArray(clientIp) ? clientIp[0] : clientIp,
            client_user_agent: userAgent,
          },
          custom_data: customData,
        },
      ],
    };

    try {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      res.json(result);
    } catch (error) {
      console.error("Error sending CAPI event:", error);
      res.status(500).json({ error: "Failed to send event to Facebook" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
