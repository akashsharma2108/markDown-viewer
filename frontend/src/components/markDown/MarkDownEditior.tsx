import React, { useState, useEffect } from "react";
import "./markdownEditior.scss";
import io from "socket.io-client";
import ModalComponent from "../modal/Modal";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      transports: ["websocket"],
    });
    newSocket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });
    newSocket.on("html", (receivedHtml: string) => {
      setHtml(receivedHtml);
    });
    newSocket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    if (socket) {
      socket.emit("message", newMarkdown);
    }
  };

  return (
    <>
      <button className="help-button" onClick={() => setModalIsOpen(true)}>
        Help
      </button>
      <div className="markdown-editor">
        <textarea
          className="markdown-input"
          placeholder="Type your Markdown here..."
          value={markdown}
          onChange={handleInputChange}
        />
        <div
          className="markdown-preview"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <ModalComponent
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </>
  );
};

export default MarkdownEditor;
