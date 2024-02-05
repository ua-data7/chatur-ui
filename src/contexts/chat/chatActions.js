// Action Types
export const INIT_CHAT_SESSION = "INIT_CHAT_SESSION";
export const APPEND_MESSAGE = "APPEND_MESSAGE";
export const SET_STUDENT_MESSAGE_APPENDED = "SET_STUDENT_MESSAGE_APPENDED";
export const SET_PENDING_CHATBOT_MESSAGE = "SET_PENDING_CHATBOT_MESSAGE";
export const SET_PENDING_COURSE_ID = "SET_PENDING_COURSE_ID";

// Action Creators
export const initChatSession = (id, message) => ({
  type: INIT_CHAT_SESSION,
  payload: { id, message },
});

export const appendMessage = (id, message) => ({
  type: APPEND_MESSAGE,
  payload: { id, message },
});

export const setStudentMessageAppended = (value) => ({
  type: SET_STUDENT_MESSAGE_APPENDED,
  payload: value,
});

export const setPendingChatbotMessage = (message) => ({
  type: SET_PENDING_CHATBOT_MESSAGE,
  payload: message,
});

export const setPendingCourseId = (id) => ({
  type: SET_PENDING_COURSE_ID,
  payload: id,
});
