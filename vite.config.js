import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow access from external sources
    port: 5173, // Use the correct port
    strictPort: true, // Prevent conflicts
    cors: true, // Allow cross-origin requests
    allowedHosts: ["v23z9h-5173.csb.app", "localhost"], // Allow CodeSandbox and local access
  },
});
