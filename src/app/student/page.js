"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Sidebar from "@/components/chat/Sidebar";
import MyMessages from "@/components/chat/MyMessages";
import { CourseProvider } from "@/contexts/CourseContext";

export default function Student() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <CourseProvider>
        <Box sx={{ display: "flex", minHeight: "100dvh" }}>
          <Sidebar />
          <Box component="main" className="MainContent" sx={{ flex: 1 }}>
            <MyMessages />
          </Box>
        </Box>
      </CourseProvider>
    </CssVarsProvider>
  );
}
