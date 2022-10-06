// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req, res) {
  const resp = await fetch(`https://viacep.com.br/ws/31310520/json/`);
  const data =  await resp.json();

  return new Response(
   JSON.stringify(data),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
  res.status(200).json({ name: 'John Doe' })
}
