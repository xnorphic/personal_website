import { NextResponse } from "next/server";
import { SYSTEM_PROMPT, ruleBasedAnswer } from "@/lib/knowledge";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

// Calls an OpenAI-compatible chat completions API when a key is configured.
// Works with OpenAI, Groq, OpenRouter, Together, etc. via OPENAI_BASE_URL.
async function llmAnswer(
  message: string,
  history: ChatMessage[],
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const baseUrl = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const messages = [
    { role: "system" as const, content: SYSTEM_PROMPT },
    ...history.slice(-6),
    { role: "user" as const, content: message },
  ];

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.4,
        max_tokens: 400,
      }),
    });
    if (!res.ok) {
      console.error("LLM request failed:", res.status, await res.text());
      return null;
    }
    const data = await res.json();
    const content: string | undefined = data?.choices?.[0]?.message?.content;
    return content?.trim() || null;
  } catch (err) {
    console.error("LLM request error:", err);
    return null;
  }
}

export async function POST(req: Request) {
  let body: { message?: string; history?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const message = (body.message || "").toString().slice(0, 1000).trim();
  if (!message) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }
  const history = Array.isArray(body.history) ? body.history : [];

  const llm = await llmAnswer(message, history);
  const reply = llm ?? ruleBasedAnswer(message);

  return NextResponse.json({ reply, source: llm ? "llm" : "rules" });
}
