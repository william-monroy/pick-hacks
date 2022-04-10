import { Deta } from "deta";
import { getSession } from "next-auth/react";

const db = Deta(process.env.DETA_KEY).Base(process.env.DETA_POINTS);

const handlePoints = async (req, res) => {
  try {
    const {
      user: { email },
    } = await getSession({ req });

    if (email) {
      if (req.method === "GET") {
        const content = await db.fetch({ email: email });
        res.status(200).json(content.items[0]);
      } else if (req.method === "POST") {
        const { points } = req.body;

        const query = await db.fetch({ email: email });

        const exits = query.count > 0;

        if (exits) {
          const content = await db.update(
            { points: parseInt(query.items[0].points) + parseInt(points) },
            query.items[0].key
          );
          res.status(201).json({ message: "Points updated" });
        } else {
          const content = await db.put({ email: email, points: points });
          res.status(201).json({ message: "Points added" });
        }
      }
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default handlePoints;
