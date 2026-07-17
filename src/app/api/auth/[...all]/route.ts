import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/server/better-auth";

const handler = toNextJsHandler(auth.handler);

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With, x-trpc-source",
  };
}

export const GET = handler.GET;
export const POST = handler.POST;

export function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
