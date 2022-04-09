import { Deta } from "deta";

const db = Deta(process.env.DETA_KEY).Base(process.env.DETA_CONTENT);

const handleContent = async (req, res) => {
  try {
    if (req.method === "GET") {
      const content = await db.fetch();
      res.status(200).json(content.items);
    } else if (req.method === "POST") {
      const { title, url, tags } = req.body;
      const content = await db.put({
        title,
        url,
        tags,
      });
      res.status(201).json(content);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default handleContent;
