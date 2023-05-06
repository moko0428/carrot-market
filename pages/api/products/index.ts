import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  //   const { name, price, description } = req.body;
  //   const { user } = req.session;
  const {
    body: { name, price, description },
    session: { user },
  } = req;
  const product = await client.product.create({
    data: {
      name,
      price: +price,
      description,
      Image: "xx",
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  res.json({
    ok: true,
    product,
  });
}

export default withApiSession(withHandler({ method: "POST", handler }));
