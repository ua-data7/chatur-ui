import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import AvatarWithStatus from "./AvatarWithStatus";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import MessagesPaneHeader from "./MessagesPaneHeader";
import { useChats } from "@/contexts/chat/ChatContext";
import { useCourses } from "@/contexts/courses/CourseContext";

export default function MessagesPane(props) {
  const { state } = useChats();
  const { selectedCourse } = useCourses();
  const { chats } = state;

  return (
    <Sheet
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.level1",
      }}
    >
      <MessagesPaneHeader />
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
                    <AvatarWithStatus
                      online={message.sender.online}
                      src={message.sender.avatar}
                    />
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
      <MessageInput />
    </Sheet>
  );
}
