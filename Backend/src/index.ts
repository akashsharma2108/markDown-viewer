import express from "express";
import http from "http"; 
import { Marked } from "marked";
import { Server as SocketIOServer, Socket } from "socket.io"; 
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang, info) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const app = express();
const server = http.createServer(app); 
const io = new SocketIOServer(server); 

io.on("connection", (socket: Socket) => {
  console.log("Client connected");

  socket.on("message", async (message: string) => {
    try {
      const html = marked.parse(message);
      socket.emit("html", html);
    } catch (error) {
      console.error("Error parsing Markdown:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
