import { useCallback, useContext } from "react";
import { ChatContext } from "@/contexts/chat/ChatContext";
import {
  appendMessage,
  initChatSession,
  setPendingChatbotMessage,
  setStudentMessageAppended,
  setPendingCourseId,
} from "@/contexts/chat/chatActions";

export const useSendMessage = () => {
  const { dispatch, state } = useContext(ChatContext);

  const sendMessage = useCallback(
    (courseId, messageString, sender) => {
      const newMessage = {
        sender,
        message: messageString,
        timestamp: Date.now(),
      };

      // Check if the chat session already exists
      if (state.chats[courseId]?.messages) {
        // Append message to an existing chat session
        dispatch(appendMessage(courseId, newMessage));
      } else {
        // Initialize a new chat session with the first message
        dispatch(initChatSession(courseId, newMessage));
      }

      // Additional logic based on sender
      if (sender === "You") {
        dispatch(setStudentMessageAppended(true));
        dispatch(setPendingCourseId(courseId));
      } else if (sender === "Chatur") {
        dispatch(setPendingChatbotMessage(null));
        dispatch(setPendingCourseId(null));
      }
    },
    [dispatch, state.chats],
  );

  return sendMessage;
};
