const getProfile = async () => {
  const req = await fetch(`/api/user`);
  let res;

  try {
    res = await req.json();
  } catch {
    res = null;
  }

  return res;
};

const updateProfile = async (name, tags) => {
  const req = await fetch(`/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, tags }),
  });
  const res = await req.json();

  return res;
};

export { getProfile, updateProfile };
