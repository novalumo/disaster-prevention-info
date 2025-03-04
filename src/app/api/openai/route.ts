import { Hono } from 'hono';

// OpenAI API ルート
const openaiRoute = new Hono();

openaiRoute.get('/', (c) => {
  return c.json({ message: 'Hello, World!' });
});

export default openaiRoute;
