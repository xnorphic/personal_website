"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/content";
import { FAQ_TABS, TEASER_LINES } from "@/lib/chatbot-faq";

type Message = { role: "user" | "assistant"; content: string };

type ApiStatus = {
  configured: boolean;
  llmReachable: boolean;
  mode: "llm" | "rules";
  status: "online" | "offline" | "fallback";
  label: string;
};

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi! I'm Aditya's assistant — part FAQ bot, part career hype man, fully grounded in his actual resume. Pick a tab below or just ask.",
};

const AUTO_OPEN_KEY = "chatbot-auto-opened";
const TEASER_DISMISSED_KEY = "chatbot-teaser-dismissed";

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
  const [activeTab, setActiveTab] = useState(FAQ_TABS[0].id);
  const [apiStatus, setApiStatus] = useState<ApiStatus | null>(null);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [teaserLine] = useState(
    () => TEASER_LINES[Math.floor(Math.random() * TEASER_LINES.length)],
  );
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollMilestones = useRef(new Set<number>());

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/chat/status", { cache: "no-store" });
      if (res.ok) setApiStatus(await res.json());
    } catch {
      setApiStatus({
        configured: false,
        llmReachable: false,
        mode: "rules",
        status: "fallback",
        label: "Smart backup mode",
      });
    }
  }, []);

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);
    return () => clearInterval(interval);
  }, [fetchStatus]);

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Teaser bubble after a short delay
  useEffect(() => {
    if (sessionStorage.getItem(TEASER_DISMISSED_KEY)) return;
    const timer = setTimeout(() => setTeaserVisible(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-expand after 2–3 viewport scrolls
  useEffect(() => {
    if (sessionStorage.getItem(AUTO_OPEN_KEY)) return;

    const onScroll = () => {
      const milestone = Math.floor(window.scrollY / window.innerHeight);
      if (milestone <= 0) return;

      scrollMilestones.current.add(milestone);
      if (scrollMilestones.current.size >= 2) {
        setOpen(true);
        setTeaserVisible(false);
        sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function dismissTeaser() {
    setTeaserVisible(false);
    sessionStorage.setItem(TEASER_DISMISSED_KEY, "1");
  }

  function closeChat() {
    setOpen(false);
    dismissTeaser();
  }

  async function send(text: string) {
    const message = text.trim();
    if (!message || loading) return;

    dismissTeaser();
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

  const activeQuestions =
    FAQ_TABS.find((t) => t.id === activeTab)?.questions ?? FAQ_TABS[0].questions;

  const statusClass =
    apiStatus?.status === "online"
      ? "online"
      : apiStatus?.status === "offline"
        ? "offline"
        : "fallback";

  return (
    <div className="chatbot-widget">
      {teaserVisible && !open && (
        <div className="chatbot-teaser" role="status">
          <button
            type="button"
            className="chatbot-teaser-dismiss"
            onClick={dismissTeaser}
            aria-label="Dismiss message"
          >
            ✕
          </button>
          <p>{teaserLine}</p>
          <button
            type="button"
            className="chatbot-teaser-cta"
            onClick={() => {
              dismissTeaser();
              setOpen(true);
            }}
          >
            Fine, ask away →
          </button>
        </div>
      )}

      <div className={`chatbot-container ${open ? "active" : ""}`}>
        <div className="chatbot-header">
          <button
            className="chatbot-close-btn"
            onClick={closeChat}
            aria-label="Close chat"
          >
            ✕
          </button>

          <div className="chatbot-header-top">
            <div>
              <h3>Ask about Aditya</h3>
              <p>Experience, projects &amp; contact</p>
            </div>
            <div className={`chatbot-status chatbot-status--${statusClass}`}>
              <span className="chatbot-status-dot" aria-hidden="true" />
              <span className="chatbot-status-label">
                {apiStatus?.label ?? "Checking…"}
              </span>
            </div>
          </div>

          <Link
            href={SITE.cv}
            download
            className="chatbot-cv-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5-5 5 5"
              />
            </svg>
            Download CV
          </Link>
        </div>

        <div className="chatbot-tabs" role="tablist" aria-label="Question categories">
          {FAQ_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`chatbot-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="chatbot-quick-questions">
          {activeQuestions.map((q) => (
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
            <div
              key={i}
              className={`cb-message ${m.role === "user" ? "user" : "bot"}`}
            >
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
        className={`chatbot-toggle-btn ${open ? "active" : ""} ${teaserVisible && !open ? "pulse" : ""}`}
        onClick={() => {
          dismissTeaser();
          setOpen((o) => !o);
        }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}
