"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import Box from "@mui/joy/Box";

import Welcome from "@/components/instructor/Welcome";

export default function Instructor() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <Welcome />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
