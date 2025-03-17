import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5001,  // ✅ Vite frontend runs on port 5001
//     strictPort: true, // Prevents Vite from switching to another port
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    strictPort: true,
    proxy: {
      "/api": {
        target:
        process.env.NODE_ENV === "production"
            ? "https://ccbackend-j3z5.onrender.com" // ✅ Production backend
            : "http://localhost:5000", // ✅ Local backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

