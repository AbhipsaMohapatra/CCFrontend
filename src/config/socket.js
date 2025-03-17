import { io } from "socket.io-client";

// const SOCKET_URL = "http://localhost:5000";

// // Ensure only one instance is created
// export const socket = io(SOCKET_URL, {
//   transports: ["websocket", "polling"], // Ensure WebSockets work
//   reconnectionAttempts: 5, // Retry connecting 5 times before failing
//   reconnectionDelay: 1000,
// });

const SOCKET_URL =
process.env.NODE_ENV === "production"
    ? "https://ccbackend-j3z5.onrender.com" // ✅ Use Render backend in production
    : "http://localhost:5000"; // ✅ Use local backend in development

// Ensure only one instance is created
export const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"], // Ensure WebSockets work
  reconnectionAttempts: 5, // Retry connecting 5 times before failing
  reconnectionDelay: 1000,
});


