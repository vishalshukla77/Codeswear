// src/app/api/page/route.js

export async function GET(request) {
  return new Response(JSON.stringify({
    code1: 234400,
    code2: 721382,
    code3: 110003,
    code4: 560017
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
