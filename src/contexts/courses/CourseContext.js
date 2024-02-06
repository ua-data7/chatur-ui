import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
} from "react";
import useFetchCourses from "@/hooks/useFetchCourses";

// Context for currently selected course
const CourseContext = createContext({
  selectedCourse: null,
  setSelectedCourse: () => {},
  courses: [],
});

export const CourseProvider = ({ children }) => {
  const { courses, loading, error } = useFetchCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Set the selected course once courses are loaded
  useEffect(() => {
    if (!loading && courses.length > 0) {
      setSelectedCourse(courses[0]);
    }
  }, [courses, loading]);

  const value = useMemo(
    () => ({
      selectedCourse,
      setSelectedCourse,
      courses,
      loading,
      error,
    }),
    [selectedCourse, courses, loading, error],
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
