import { io } from "socket.io-client";

// const SOCKET_URL = "http://localhost:5000";

// // Ensure only one instance is created
// export const socket = io(SOCKET_URL, {
//   transports: ["websocket", "polling"], // Ensure WebSockets work
//   reconnectionAttempts: 5, // Retry connecting 5 times before failing
//   reconnectionDelay: 1000,
// });


const SOCKET_URL = "https://ccbackend-j3z5.onrender.com"; // ✅ Always use deployed backend

console.log("Connecting to:", SOCKET_URL); // Debugging log

export const socket = io(SOCKET_URL, {
  transports: ["websocket", "polling"], // Ensure WebSockets work
  reconnectionAttempts: 5, // Retry connecting 5 times before failing
  reconnectionDelay: 1000,
});

