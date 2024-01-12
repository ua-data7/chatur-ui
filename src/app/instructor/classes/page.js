"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import Box from "@mui/joy/Box";

import Classes from "@/components/instructor/ManageClasses/Classes";

export default function Instructor() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
                <Box component="main" className="MainContent" sx={{ flex: 1 }}>
                    <Classes />
                </Box>
        </CssVarsProvider>
    );
}
