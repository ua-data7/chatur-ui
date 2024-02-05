import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Textarea from "@mui/joy/Textarea";
import { Stack } from "@mui/joy";
import React, { useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useCourses } from "@/contexts/courses/CourseContext";
import { useChats } from "@/contexts/chat/ChatContext";

import { setPendingChatbotMessage } from "@/contexts/chat/chatActions";

export default function MessageInput() {
  const [isLoading, setIsLoading] = useState(false);
  const [studentMessage, setStudentMessage] = useState("");
  const { sendMessage, dispatch } = useChats();
  const { selectedCourse } = useCourses();

  const handleChatbotResponse = async () => {
    try {
      if (studentMessage.trim() !== "") {
        setIsLoading(true);

        const params = {
          message: studentMessage,
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
          setPendingChatbotMessage(dispatch, responseBody.error);
        } else {
          setPendingChatbotMessage(dispatch, responseBody.output);
        }
      }
    } catch (error) {
      setPendingChatbotMessage(
        dispatch,
        "Something went wrong, please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    sendMessage(selectedCourse.id, studentMessage, "You");
    // Clear the text area after submitting
    setStudentMessage("");
    handleChatbotResponse();
  };

  return (
    <Box sx={{ px: 2, pb: 3 }}>
      <FormControl>
        <Textarea
          placeholder="Type something here…"
          aria-label="Message"
          onChange={(e) => {
            setStudentMessage(e.target.value);
          }}
          value={studentMessage}
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
