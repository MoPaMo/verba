// app/api/hello/route.js

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Hello from Next.js 14 API!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }