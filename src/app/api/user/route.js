import { NextResponse } from "next/server";
import { headers } from "next/headers";

/**
 * Gets the user info from request headers.
 *
 * The APIsix openid-connect plugin passes in a base64 encoded json string containing the user info.
 * @param {*} req
 */
export async function GET(req) {
  const headersList = headers();
  const userInfoHeader = headersList.get("X-Userinfo");

  if (userInfoHeader) {
    const userInfo = parseBase64UserInfo(userInfoHeader);
    return NextResponse.json({ userInfo: userInfo });
  } else {
    const userInfo = {
      name: "Wilbur Wildcat",
      given_name: "Wilbur",
      family_name: "Wildcat",
      email: "wilbur@arizona.edu",
    };
    return NextResponse.json({ userInfo: userInfo });
  }
}

function parseBase64UserInfo(base64) {
  const binString = atob(base64);
  return JSON.parse(binString);
}
