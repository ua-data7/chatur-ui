import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ChatPaneHeader from "./ChatPaneHeader";

import { useChats } from "@/contexts/chat/ChatContext";
import { useCourses } from "@/contexts/courses/CourseContext";

export default function MessagesPane() {
  const { state } = useChats();
  const { chats } = state;
  const { selectedCourse } = useCourses();

  return (
    <Sheet
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.level1",
      }}
    >
      <ChatPaneHeader />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          px: 2,
          py: 3,
          overflowY: "scroll",
          flexDirection: "column-reverse",
        }}
      >
        <Stack spacing={2} justifyContent="flex-end">
          {selectedCourse.id in state.chats &&
            chats[selectedCourse.id].messages?.map((message, index) => {
              const isYou = message.sender === "You";
              return (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  flexDirection={isYou ? "row-reverse" : "row"}
                >
                  {message.sender !== "You" && (
                    <Avatar src={"images/llamacactus.png"} />
                  )}
                  <ChatBubble
                    variant={isYou ? "sent" : "received"}
                    {...message}
                  />
                </Stack>
              );
            })}
        </Stack>
      </Box>
      <ChatInput />
    </Sheet>
  );
}
