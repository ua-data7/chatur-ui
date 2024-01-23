import React, { createContext, useContext, useState } from 'react';

// Context for chat messages for each course
const ChatContext = createContext();

export const CourseChatProvider = ({ children }) => {
    // State to hold chats for each course
    // Example: { 'CSC335': [chatMessages], 'RNR202': [chatMessages] }
    const [courseChats, setCourseChats] = useState({});

    // Function to update chat for a specific course
    const updateCourseChat = (courseId, newChatMessages) => {
        setCourseChats(prevCourseChats => ({
            ...prevCourseChats,
            [courseId]: newChatMessages
        }));
    };

    return (
        <ChatContext.Provider value={{ courseChats, updateCourseChat }}>
            {children}
        </ChatContext.Provider>
    );
};

// Custom hook for using the ChatContext
export const useCourseChats = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useCourseChats must be used within a ChatProvider');
    }
    return context;
};
