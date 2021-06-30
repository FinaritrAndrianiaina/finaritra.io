import { Post } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import clientDB from "../__clientDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const posts = await clientDB.post.findMany();
      res.status(200).json(posts);
      return;
    case "POST":
      const auth = req.headers["auth"];
      console.log(`auth`, auth);
      if (auth === undefined) {
        res.status(401).json({ message: "auth required" });
        return;
      }
      const post: any = req.body;
      try {
        const newPost = await clientDB.post.create({
          data: {
            author: {
              connect: {
                id: "auth",
              },
            },
            ...post,
          },
        });
        res.status(200).json(newPost);
      } catch (e) {
        const error: PrismaClientValidationError = e;
        res.status(401).send({ name: error.name, message: error.message });
        return;
      }
      return;
    default:
      return;
  }
}
