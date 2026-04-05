import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true, // This allows ngrok and other tunnels
    proxy: {
      // This tells Vite to redirect any call to /api-counter to the real API
      "/api-counter": {
        target: "https://api.counterapi.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-counter/, ""),
      },
    },
  },
});
