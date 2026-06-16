import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Sinha — AI, Analytics & Commercial Strategy",
    short_name: "Aditya Sinha",
    description:
      "Personal site of Aditya Sinha, AI, analytics and commercial strategy leader.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#6366f1",
    icons: [
      { src: "/favicon.png", sizes: "any", type: "image/png" },
    ],
  };
}
