import React, { createContext, useContext, useReducer } from "react";
import chatReducer from "./chatReducer";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialState = {
    chats: {}, // Chat sessions are stored as { courseId: { messages: [] }}
    studentMessageAppended: false,
    pendingChatbotMessage: null,
    pendingCourseId: null,
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
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
