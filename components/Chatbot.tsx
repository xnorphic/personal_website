"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_QUESTIONS = [
  "What does Aditya do?",
  "Tell me about his AI projects",
  "What's his experience?",
  "How can I contact him?",
];

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Aditya's assistant. Ask me about his experience, AI & analytics projects, skills, or how to get in touch.",
};

// Linkify URLs and emails in bot messages.
function renderContent(text: string) {
  const pattern = /(https?:\/\/[^\s)]+)|([\w.+-]+@[\w-]+\.[\w.-]+)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const token = m[0];
    const href = token.includes("@") ? `mailto:${token}` : token;
    parts.push(
      <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
        {token}
      </a>,
    );
    last = m.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;

    const history = messages.filter((m) => m.content !== GREETING.content);
    const next: Message[] = [...messages, { role: "user", content: message }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const data = await res.json();
      const reply =
        data?.reply ||
        "Sorry, something went wrong. You can reach Aditya at work.adityasinha@gmail.com.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. You can reach Aditya at work.adityasinha@gmail.com or on LinkedIn.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot-widget">
      <div className={`chatbot-container ${open ? "active" : ""}`}>
        <div className="chatbot-header">
          <button
            className="chatbot-close-btn"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ✕
          </button>
          <h3>Ask about Aditya</h3>
          <p>AI assistant · experience, projects &amp; more</p>
        </div>

        <div className="chatbot-quick-questions">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q}
              className="quick-question"
              onClick={() => send(q)}
              disabled={loading}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="chatbot-messages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`cb-message ${m.role === "user" ? "user" : "bot"}`}>
              <div className="cb-message-content">
                {m.role === "assistant" ? renderContent(m.content) : m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="cb-message bot loading">
              <div className="cb-message-content">
                <div className="typing-indicator">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            </div>
          )}
        </div>

        <form
          className="chatbot-input-group"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <input
            ref={inputRef}
            className="chatbot-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Aditya…"
            aria-label="Chat message"
          />
          <button
            type="submit"
            className="chatbot-send"
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            ➤
          </button>
        </form>
      </div>

      <button
        className={`chatbot-toggle-btn ${open ? "active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
