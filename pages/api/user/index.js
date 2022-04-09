import { Deta } from "deta";
import { getSession } from "next-auth/react";

const db = Deta(process.env.DETA_KEY).Base(process.env.DETA_USERS);

const handleUser = async (req, res) => {
  try {
    const {
      user: { email },
    } = await getSession({ req });

    if (email) {
      if (req.method === "GET") {
        const content = await db.fetch({ email: email });

        res.status(200).json(content.items[0]);
      } else if (req.method === "POST") {
        let content;
        const { name, tags } = req.body;

        const user = {
          name,
          email,
          tags,
        };

        const query = await db.fetch({ email: email });

        const exits = query.count > 0;

        if (exits) {
          content = await db.update(user, query.items[0].key);
        } else {
          content = await db.put(user);
        }
        res.status(201).json(content.items[0]);
      }
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default handleUser;
