// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../lib/db";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const query = "SELECT * from post";
  const postDB = await conn.connect();
  try {
    return new Promise((resolve, rejects) => {});
  } catch {
    res.status(500).end();
  } finally {
    postDB.release();
  }
}
