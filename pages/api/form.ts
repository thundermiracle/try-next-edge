import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function form(req: any) {
  console.log("req.url:", req.url);
  console.log("req.sourcePage:", req.sourcePage);
  console.log("req:", JSON.stringify(req));
  return NextResponse.json({
    domain: "joinsure-dev-portal.jp.auth0.com",
    clientId: "LTGqM8sO4K6ZUzsViFTVeHNRn4ecCZBa",
    connectionName: "justincase-dev",
  });
}

export const config = {
  runtime: "experimental-edge",
};
