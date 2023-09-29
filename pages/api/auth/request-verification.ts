import type { NextApiRequest, NextApiResponse } from "next";

export default function requestVerification(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  res.status(200).json({ email });
}
