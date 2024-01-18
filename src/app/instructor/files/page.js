"use client";

import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import Box from "@mui/joy/Box";

import Files from "@/components/instructor/Files";

import { courses } from "../../../data";

export default function Instructor() {
  const [selectedCourse, setSelectedCourse] = React.useState("RNR 355 2024");

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <Files
            courses={courses}
            courseFileListing={courses.find(
              (course) => course.label === selectedCourse,
            )}
            onCourseChange={setSelectedCourse}
          />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
