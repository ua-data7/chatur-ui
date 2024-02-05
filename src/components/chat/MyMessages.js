import React from "react";
import Sheet from "@mui/joy/Sheet";

import MessagesPane from "./MessagesPane";
import { initChatSession } from "@/contexts/chat/chatActions";
import { useCourses } from "@/contexts/courses/CourseContext";
import { useChats } from "@/contexts/chat/ChatContext";

export default function MyMessages() {
  const { selectedCourse } = useCourses();
  const { state, dispatch } = useChats();
  const { chats } = state;

  return (
    <Sheet
      sx={{
        flex: 1,
        width: "100%",
        mx: "auto",
        // pt: { xs: "var(--Header-height)", sm: 0 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
        },
      }}
    >
      <MessagesPane />
    </Sheet>
  );
}
