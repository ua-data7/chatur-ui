import React, { useState, createContext, useContext } from "react";
import { courses as courseList } from "@/contexts/courses/courses";

// Context for currently selected course
const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState(courseList[0]);
  const [courses, setCourses] = useState(courseList);

  const updateSelectedCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <CourseContext.Provider
      value={{ selectedCourse, updateSelectedCourse, courses, setCourses }}
    >
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook for using the CourseContext
export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error(
      "useCourses must be used within a SelectedCourseProvider",
    );
  }
  return context;
};
