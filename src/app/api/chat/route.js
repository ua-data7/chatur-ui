import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req) {
  const requestBody = await req.json();

  const apiUrl = requestBody.endpoint
    ? joinUrl(process.env.CHAT_API_URL, requestBody.endpoint)
    : process.env.CHAT_API_URL;

  const headersList = headers();
  // apisix openid-connect plugin will pass in a base64 encoded json string of the userinfo
  const userInfoHeader = headersList.get("X-Userinfo");

  console.log(req.method, req.url);
  if (userInfoHeader) {
    console.log("userInfo", parseBase64UserInfo(userInfoHeader));
  }

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

function parseBase64UserInfo(base64) {
  const binString = atob(base64);
  return JSON.parse(binString);
}

const joinUrl = (baseUrl, endpoint) => {
  return `${baseUrl.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;
};
