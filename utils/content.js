const getContent = async () => {
  const req = await fetch(`/api/content`);
  const res = await req.json();

  return res;
};

const addContent = async (title, url, tags) => {
  const req = await fetch(`/api/content`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, url, tags }),
  });
  const res = await req.json();

  return res;
};

export { getContent, addContent };
