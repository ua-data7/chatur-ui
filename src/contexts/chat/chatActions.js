// courseActions.js
export const INIT_CHAT_SESSION = "INIT_CHAT_SESSION";
export const APPEND_MESSAGE = "APPEND_MESSAGE";
export const SET_STUDENT_MESSAGE_APPENDED = "SET_STUDENT_MESSAGE_APPENDED";
export const SET_PENDING_CHATBOT_MESSAGE = "SET_PENDING_CHATBOT_MESSAGE";
export const SET_PENDING_COURSE_ID = "SET_PENDING_COURSE_ID";

export const initChatSession = (dispatch, id, message) => {
  dispatch({ type: "INIT_CHAT_SESSION", payload: { id, message } });
};

export const appendMessage = (dispatch, id, message, sender) => {
  dispatch({ type: "APPEND_MESSAGE", payload: { id, message, sender } });
};

export const setStudentMessageAppended = (dispatch, value) => {
  dispatch({ type: "SET_STUDENT_MESSAGE_APPENDED", payload: value });
};

export const setPendingChatbotMessage = (dispatch, message) => {
  dispatch({ type: "SET_PENDING_CHATBOT_MESSAGE", payload: message });
};

export const setPendingCourseId = (dispatch, id) => {
  dispatch({ type: "SET_PENDING_COURSE_ID", payload: id });
};
