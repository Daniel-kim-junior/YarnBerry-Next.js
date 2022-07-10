// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import conn from "../../lib/db";


type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any[]>) {
  const query = "SELECT * from post";
  const postDB = await conn.connect();
  try {
    const rst = await postDB.query(query);
    res.json(rst.rows);
  } catch {
    throw new Error();
  }
}
