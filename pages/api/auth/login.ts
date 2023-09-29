import type { NextApiRequest, NextApiResponse } from "next";

export default function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { code, email } = req.body;

  const accessToken = "yourAccessTokenValue";
  const refreshToken = "yourRefreshTokenValue";

  res.setHeader(
    "Set-Cookie-accessToken",
    `accessToken=${accessToken}; HttpOnly; Path=/; SameSite=Strict`
  );

  res.setHeader(
    "Set-Cookie-refreshToken",
    `refreshToken=${refreshToken}; HttpOnly; Path=/; SameSite=Strict`
  );

  res.status(200).json({ username: "John Doe", code, email });
}
