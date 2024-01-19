import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const apiKey = process.env.CHAT_API_KEY;
  const apiUrl = process.env.CHAT_API_URL;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        input: body.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong with the chatbot API response.");
    }

    const responseBody = await response.json();
    return NextResponse.json({ output: responseBody.output });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
