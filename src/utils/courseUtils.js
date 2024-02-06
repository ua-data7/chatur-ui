export function formatCourseId(courseId) {
  const parts = courseId.split("_");
  const formattedParts = parts.map((part, index) =>
    index === 0 ? part.toUpperCase() : part,
  );
  return formattedParts.join(" ");
}
