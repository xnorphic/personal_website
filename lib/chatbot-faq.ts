export type FaqTab = {
  id: string;
  label: string;
  questions: string[];
};

export const FAQ_TABS: FaqTab[] = [
  {
    id: "about",
    label: "About",
    questions: [
      "What does Aditya do?",
      "What's his background?",
      "Where is he based?",
      "Is he open to new roles?",
    ],
  },
  {
    id: "experience",
    label: "Experience",
    questions: [
      "What's his current role at Careem?",
      "Tell me about Good Glamm Group",
      "Goldman Sachs & J.P. Morgan roles?",
      "How many years of experience?",
    ],
  },
  {
    id: "projects",
    label: "Projects",
    questions: [
      "AI pricing project results?",
      "ML inventory savings?",
      "LLM customer support work?",
      "What projects has he built?",
    ],
  },
  {
    id: "contact",
    label: "Contact",
    questions: [
      "How can I reach him?",
      "What's his email?",
      "LinkedIn profile?",
      "Can I hire him?",
    ],
  },
];

export const TEASER_LINES = [
  "Yes, it's a chatbot. No, I won't pretend to be sentient. I just read his CV so you don't have to.",
  "Ask me anything basic. I'm basically his LinkedIn, but with fewer humble brags.",
  "Scroll, scroll, scroll… fine, I'll help. I know his resume better than most recruiters.",
  "Powered by AI (probably). Grounded in facts (definitely). Sarcasm (included free).",
];
