import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: [
      // Add this if you have a monorepo structure with packages in a "packages" directory
      "src/**/*.jsx",
      "src/**/*.js",
    ],
  },
});
