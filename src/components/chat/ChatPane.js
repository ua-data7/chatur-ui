import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import CircularProgress from "@mui/joy/CircularProgress";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import ChatPaneHeader from "./ChatPaneHeader";

import { useChats } from "@/contexts/chat/ChatContext";
import { useCourses } from "@/contexts/courses/CourseContext";
import PendingMessageBubble from "./PendingMessageBubble";

export default function MessagesPane() {
  const { state } = useChats();
  const { chats } = state;
  const { selectedCourse, loading, error } = useCourses();

  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  };

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
      {loading ? (
        <Box sx={loaderStyle}>
          <CircularProgress />
        </Box>
      ) : (
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
            {selectedCourse &&
              selectedCourse.id in chats &&
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
                      <Avatar src={"images/cactuar-avatar.png"} />
                    )}
                    <ChatBubble
                      variant={isYou ? "sent" : "received"}
                      {...message}
                    />
                  </Stack>
                );
              })}
            {/* Show loading message bubble if waiting for response */}
            {!state.pendingChatbotMessage &&
              state.pendingCourseId === selectedCourse?.id && (
                <Stack direction="row" spacing={2} flexDirection={"row"}>
                  <Avatar src={"images/cactuar-avatar.png"} />
                  <PendingMessageBubble />
                </Stack>
              )}
          </Stack>
        </Box>
      )}
      <ChatInput />
    </Sheet>
  );
}
