import { NextApiRequest, NextApiResponse } from "next";
import clientDB from "../__clientDB";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      const { id }: any = req.query;
      const post = clientDB.post.findFirst({ where: { id } });
      res.status(200).json(post);
  }
}
