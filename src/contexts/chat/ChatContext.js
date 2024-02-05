import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";
import chatReducer from "./chatReducer";

import {
  setStudentMessageAppended,
  setPendingCourseId,
  appendMessage,
  setPendingChatbotMessage,
  initChatSession,
} from "./chatActions";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialState = {
    chats: {}, // Tracks chat sessions by Course ID
    studentMessageAppended: false,
    pendingChatbotMessage: null,
    pendingCourseId: null,
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const sendMessage = useCallback(
    (courseId, messageString, sender) => {
      const newMessage = {
        sender: sender,
        message: messageString,
        timestamp: Date.now(),
      };

      if (sender === "Chatur") {
        appendMessage(dispatch, courseId, newMessage);
        setPendingChatbotMessage(dispatch, null);
        setPendingCourseId(dispatch, null);
      } else if (sender === "You") {
        if (Array.isArray(state.chats[courseId]?.messages)) {
          appendMessage(dispatch, courseId, newMessage);
        } else {
          initChatSession(dispatch, courseId, newMessage);
        }
        setStudentMessageAppended(dispatch, true);
        setPendingCourseId(dispatch, courseId);
      }
    },
    [state.chats],
  );

  React.useEffect(() => {
    if (state.studentMessageAppended && state.pendingChatbotMessage) {
      console.log(
        state.studentMessageAppended,
        state.pendingChatbotMessage,
        state.pendingCourseId,
      );
      sendMessage(state.pendingCourseId, state.pendingChatbotMessage, "Chatur");
    }
  }, [state.studentMessageAppended, state.pendingChatbotMessage, sendMessage]);

  return (
    <ChatContext.Provider value={{ state, dispatch, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook for using the ChatContext
export const useChats = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChats must be used within a ChatProvider");
  }
  return context;
};
