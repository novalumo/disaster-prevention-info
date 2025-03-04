import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import servicesRoute from '../services';
import openaiRoute from '../openai';

export const runtime = 'edge';

// メインのAPIルーター
const app = new Hono<{ Bindings: CloudflareEnv }>().basePath('/api');

// 各APIルートをマウント
app.route('/openai', openaiRoute);
app.route('/services', servicesRoute);

// Vercelのエッジランタイムでハンドリング
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
