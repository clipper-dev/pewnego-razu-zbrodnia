// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Token = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Token>
) {
  res
    .status(200)
    .json({ access_token: "test", token_type: "test", expires_in: 1 });
}
