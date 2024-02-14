"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Sidebar from "@/components/chat/Sidebar";

import ChatContainer from "@/components/chat/ChatContainer";
import { CourseProvider } from "@/contexts/courses/CourseContext";
import { ChatProvider } from "@/contexts/chat/ChatContext";
import { UserProvider } from "@/contexts/user/UserContext";

export default function Student() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <CourseProvider>
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <UserProvider>
            <Sidebar />
          </UserProvider>
          <Box component="main" className="MainContent" sx={{ flex: 1 }}>
            <ChatProvider>
              <ChatContainer />
            </ChatProvider>
          </Box>
        </Box>
      </CourseProvider>
    </CssVarsProvider>
  );
}
