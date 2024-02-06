import { NextResponse } from "next/server";

const courses = [
  { id: "csc_335", name: "Object Oriented Programming" },
  { id: "rnr_353", name: "Introduction to Wildland Fire" },
];

export async function GET(req) {
  const apiUrl = process.env.COURSE_API_URL;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Something went wrong, please try again.");
    }

    const responseBody = await response.json();
    return NextResponse.json({ courses: responseBody.courses });
  } catch (error) {
    console.error(
      "Failed to fetch courses from API, returning dummy list",
      error,
    );

    // Return the dummy list of courses if the API call fails
    return NextResponse.json({ courses: courses });
  }
}
