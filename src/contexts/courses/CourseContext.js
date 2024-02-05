import React, { createContext, useState, useContext, useMemo } from "react";
import { courses as courseList } from "@/contexts/courses/courses";

// Context for currently selected course
const CourseContext = createContext({
  selectedCourse: null,
  setSelectedCourse: () => {},
  courses: [],
});

export const CourseProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(courseList[0]);
  const [courses] = useState(courseList);

  const value = useMemo(
    () => ({
      selectedCourse,
      setSelectedCourse,
      courses,
    }),
    [selectedCourse, courses],
  );

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

// Custom hook for using the CourseContext
export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};
