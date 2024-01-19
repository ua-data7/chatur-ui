import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Textarea from "@mui/joy/Textarea";
import { Stack } from "@mui/joy";
import React, { useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function MessageInput(props) {
  const {
    studentMessage,
    setStudentMessage,
    appendMessage,
    setPendingChatbotMessage,
  } = props;
  const [isLoading, setIsLoading] = useState(false);

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
          setPendingChatbotMessage(responseBody.error);
        } else {
          setPendingChatbotMessage(responseBody.output);
        }
      }
    } catch (error) {
      setPendingChatbotMessage("Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    appendMessage(studentMessage, "You");
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
