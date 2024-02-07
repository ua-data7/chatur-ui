import React from "react";
import Markdown from "react-markdown";
import { styled } from "@mui/joy/styles";

const StyledMarkdown = styled(Markdown)`
  pre code {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  code {
    white-space: nowrap;
  }
`;

function FormattedMessage({ message }) {
  function stripMarkdownDelimiters(markdownText) {
    const markdownCodeBlockRegex = /```markdown\n?([\s\S]+?)```/g;
    const cleanedMarkdown = markdownText.replace(markdownCodeBlockRegex, "$1");
    return cleanedMarkdown;
  }

  const cleanedMessage = stripMarkdownDelimiters(message);

  return <StyledMarkdown>{cleanedMessage}</StyledMarkdown>;
}

export default FormattedMessage;
