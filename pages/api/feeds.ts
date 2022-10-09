import type { NextApiRequest, NextApiResponse } from 'next'

type CommitFeed = {
  type: "commit",
  message: string,
  Author: string,
  date: Date,
  commitSHA: string,
  branch: string,
}

type Data = {
  length: number,
  userFeed: CommitFeed[]
}

function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    length: 1,
    userFeed: [
      {
        type: "commit",
        message: "first commit",
        Author: "Sonu Nigam",
        date: new Date("Fri Oct 7 16:58:52 2022 +0530"),
        commitSHA: "1b9e9ddf1d1df97fdf02a814e220c29d1c295610",
        branch: "origin/main",
      },
      {
        type: "commit",
        message: "first commit",
        Author: "Sonu Nigam",
        date: new Date("Fri Oct 7 16:58:52 2022 +0530"),
        commitSHA: "1b9e9ddf1d1df97fdf02a814e220c29d1c295610",
        branch: "origin/main",
      }, 
    ]
  })
}

export default handler;