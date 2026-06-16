import { NextResponse } from "next/server";

export const runtime = "nodejs";

async function checkLlmReachable(): Promise<boolean> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return false;

  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";

  try {
    const res = await fetch(`${baseUrl}/models`, {
      headers: { Authorization: `Bearer ${apiKey}` },
      signal: AbortSignal.timeout(6000),
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function GET() {
  const configured = Boolean(process.env.OPENAI_API_KEY);
  const llmReachable = configured ? await checkLlmReachable() : false;

  const mode = configured && llmReachable ? "llm" : "rules";
  const status = configured
    ? llmReachable
      ? "online"
      : "offline"
    : "fallback";

  return NextResponse.json({
    configured,
    llmReachable,
    mode,
    status,
    label:
      status === "online"
        ? "AI online"
        : status === "offline"
          ? "AI offline · using backup"
          : "Smart backup mode",
  });
}
