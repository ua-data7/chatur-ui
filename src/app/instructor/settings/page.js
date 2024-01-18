"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import MyProfile from "@/components/editProfile/MyProfile";

import Box from "@mui/joy/Box";

import Settings from "@/components/instructor/Settings";

export default function Instructor() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <Settings />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
