const getPoints = async () => {
  const req = await fetch(`/api/user/points`);
  const res = await req.json();

  return res.points;
};

const AddPoints = async (points) => {
  const req = await fetch(`/api/user/points`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ points }),
  });
  const res = await req.json();

  return res;
};

export { getPoints, AddPoints };
