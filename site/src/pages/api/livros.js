export default async function handler(req, res) {
  const result = await fetch("http://localhost:3005/livros", {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.API_AUTH,
    },
  });
  const data = await result.json();

  res.status(200).json(data);
}
