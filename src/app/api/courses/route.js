import { NextResponse } from "next/server";

const courses = [
  {
    id: "cyverse",
    name: "CyVerse",
  },
  {
    id: "researchpaper",
    name: "Ag Extension Publications",
  },
  {
    id: "rnr355",
    name: "RNR 355: Introduction to Wildland Fire",
  },
  {
    id: "techlauncharizona",
    name: "Tech Launch Arizona",
  },
  {
    id: "mkdocs",
    name: "Material for MkDocs",
  },
  {
    id: "chishiki",
    name: "Chishiki 2024",
  },
  {
    id: "eceantennas",
    name: "ECE Antennas",
  },
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
