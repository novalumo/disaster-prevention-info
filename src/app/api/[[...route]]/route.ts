import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

const app = new Hono().basePath('/api');

const openaiRoute = new Hono().basePath('/openai');

openaiRoute.get('/', (c) => {
  return c.json({ message: 'Hello, World!' });
});

app.route('/openai', openaiRoute);

export const GET = handle(app);
export const POST = handle(app);
