
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  episodes: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
