// chatReducer.js
import {
  INIT_CHAT_SESSION,
  APPEND_MESSAGE,
  SET_STUDENT_MESSAGE_APPENDED,
  SET_PENDING_CHATBOT_MESSAGE,
  SET_PENDING_COURSE_ID,
} from "./chatActions";

const chatReducer = (state, action) => {
  switch (action.type) {
    case INIT_CHAT_SESSION:
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.id]: {
            ...state.chats[action.payload.id],
            messages: [action.payload.message],
          },
        },
      };
    case APPEND_MESSAGE:
      return {
        ...state,
        chats: {
          ...state.chats,
          [action.payload.id]: {
            ...state.chats[action.payload.id],
            messages: [
              ...state.chats[action.payload.id].messages,
              action.payload.message,
            ],
          },
        },
      };
    case SET_STUDENT_MESSAGE_APPENDED:
      return {
        ...state,
        studentMessageAppended: action.payload,
      };
    case SET_PENDING_CHATBOT_MESSAGE:
      return {
        ...state,
        pendingChatbotMessage: action.payload,
      };
    case SET_PENDING_COURSE_ID:
      return {
        ...state,
        pendingCourseId: action.payload,
      };
  }
};

export default chatReducer;
