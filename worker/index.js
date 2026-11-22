// Reports the release marker and the per-environment canary value this runtime received.
export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname !== "/") return new Response("Not found", {status: 404});
    return Response.json({marker: "A", canary: env.AKROVEN_CANARY ?? null}, {headers: {"Cache-Control": "no-store"}});
  },
};
