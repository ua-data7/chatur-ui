import { NextResponse } from "next/server";

export async function POST(req) {
  const requestBody = await req.json();
  const apiUrl = process.env.CHAT_API_URL;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: requestBody.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong, please try again.");
    }

    const responseBody = await response.json();
    return NextResponse.json({ output: responseBody.output });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
