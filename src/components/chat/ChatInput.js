import React, { useState } from "react";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Stack from "@mui/joy/Stack";
import Textarea from "@mui/joy/Textarea";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import { useChats } from "@/contexts/chat/ChatContext";
import { useCourses } from "@/contexts/courses/CourseContext";
import { useSendMessage } from "@/hooks/useSendMessage";
import { setPendingChatbotMessage } from "@/contexts/chat/chatActions";

export default function MessageInput() {
  const { state, dispatch } = useChats();
  const { selectedCourse } = useCourses();
  const sendMessage = useSendMessage();

  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChatbotResponse = async () => {
    try {
      if (userInput.trim() !== "") {
        setIsLoading(true);

        const params = {
          message: userInput,
          endpoint: selectedCourse.endpoint ? selectedCourse.endpoint : "",
        };

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });

        const responseBody = await response.json();

        if (responseBody.error) {
          dispatch(
            setPendingChatbotMessage(
              `${responseBody.error.status} Error: ${responseBody.error.statusText}`,
            ),
          );
        } else {
          dispatch(setPendingChatbotMessage(responseBody.output));
        }
      }
    } catch (error) {
      dispatch(setPendingChatbotMessage(`Error: ${error.message}`));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    sendMessage(selectedCourse.id, userInput, "You");
    // Clear the text area after submitting
    setUserInput("");
    handleChatbotResponse();
  };

  React.useEffect(() => {
    if (state.studentMessageAppended && state.pendingChatbotMessage) {
      sendMessage(state.pendingCourseId, state.pendingChatbotMessage, "Chatur");
    }
  }, [
    state.studentMessageAppended,
    state.pendingChatbotMessage,
    state.pendingCourseId,
  ]);

  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="Type something here…"
          aria-label="Message"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
          minRows={3}
          maxRows={10}
          endDecorator={
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              flexGrow={1}
              sx={{
                py: 1,
                pr: 1,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Button
                size="sm"
                color="primary"
                sx={{ alignSelf: "center", borderRadius: "sm" }}
                endDecorator={<SendRoundedIcon />}
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
          sx={{
            "& textarea:first-of-type": {
              minHeight: 72,
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
