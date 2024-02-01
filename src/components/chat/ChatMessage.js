import React from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function ChatMessage({ message }) {
  // Convert Markdown to HTML
  const createMarkup = (markdown) => {
    const rawMarkup = marked.parse(markdown);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  };

  return <div dangerouslySetInnerHTML={createMarkup(message)} />;
}

export default ChatMessage;
