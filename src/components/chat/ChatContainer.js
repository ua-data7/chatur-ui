import React from "react";
import Sheet from "@mui/joy/Sheet";
import ChatPane from "./ChatPane";

export default function ChatContainer() {
  return (
    <Sheet
      sx={{
        flex: 1,
        width: "100%",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
        },
      }}
    >
      <ChatPane />
    </Sheet>
  );
}
