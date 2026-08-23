import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest, NextResponse } from "next/server";

const betterAuthHandlers = toNextJsHandler(auth.handler);

async function proxyToFastApi(req: NextRequest, path: string) {
  const targetUrl = `http://127.0.0.1:8000/api/auth/${path}`;
  try {
    const body = req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined;
    const res = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": req.headers.get("content-type") || "application/json",
        "Authorization": req.headers.get("authorization") || "",
      },
      body,
    });
    const data = await res.text();
    return new NextResponse(data, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") || "application/json",
      },
    });
  } catch (err: any) {
    return NextResponse.json({ detail: "Backend connection error" }, { status: 502 });
  }
}

export async function GET(req: NextRequest, { params }: { params: { all?: string[] } }) {
  const path = params.all?.join("/") || "";
  if (path === "login" || path === "register" || path === "me") {
    return proxyToFastApi(req, path);
  }
  return betterAuthHandlers.GET(req);
}

export async function POST(req: NextRequest, { params }: { params: { all?: string[] } }) {
  const path = params.all?.join("/") || "";
  if (path === "login" || path === "register") {
    return proxyToFastApi(req, path);
  }
  return betterAuthHandlers.POST(req);
}
