import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function form(req: NextRequest) {
  console.log("req.url:", req.url);
  console.log("req.query:", req.referrer);
  return NextResponse.json({
    domain: "joinsure-dev-portal.jp.auth0.com",
    clientId: "LTGqM8sO4K6ZUzsViFTVeHNRn4ecCZBa",
    connectionName: "justincase-dev",
  });
}

export const config = {
  runtime: "experimental-edge",
};
