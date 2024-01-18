import { useState } from "react";

import Files from "../components/instructor/Files";

import { courses } from "../data";

export default {
  title: "Instructor / Files",
  component: Files,
  parameters: {
    layout: "centered",
  },
};

const FilesPageMock = () => {
  const [selectedCourse, setSelectedCourse] = useState("RNR 355 2024");

  return (
    <Files
      courses={courses}
      courseFileListing={courses.find(
        (course) => course.label === selectedCourse,
      )}
      onCourseChange={setSelectedCourse}
    />
  );
};

export const FilesView = {
  render: FilesPageMock,
};
