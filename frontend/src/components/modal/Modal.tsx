import React from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Help Modal"
      style={customStyles}
    >
      <div>
        <h2>Markdown Examples</h2>
        <p>Here are some examples of Markdown syntax:</p>
        <ul>
          <li>
            <strong>Bold Text:</strong> **bold text**
          </li>
          <li>
            <em>Italic Text:</em> *italic text*
          </li>
          <li>
            <a href="#">Link:</a> [link text](http://example.com)
          </li>
          <li>Inline Code: `console.log('Hello, world!')`</li>
          <li>Code Block:</li>
          <pre>
            <code>```javascript <br/>console.log('Hello, world!');<br/> ```</code>
          </pre>
          <li>Headers:</li>
          <pre>
            <code># Header 1 ## Header 2 ### Header 3</code>
          </pre>
          <li>Lists:</li>
          <pre>
            <code>- Item 1 <br/>- Item 2 <br/>   - Subitem</code>
          </pre>
          <li>Horizontal Rule:</li>
          <pre>
            <code>---</code>
          </pre>
          <li>Blockquote:</li>
          <pre>
            <code>{">"} This is a blockquote'.</code>
          </pre>
          <li>Image:</li>
          <pre>
            <code>![Alt Text](http://example.com/image.jpg)</code>
          </pre>
        </ul>
      </div>
      <button
        onClick={onClose}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: " 8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
};

export default ModalComponent;
