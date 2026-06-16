import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aditya Sinha — AI, Analytics & Commercial Strategy",
    short_name: "Aditya Sinha",
    description:
      "Personal site of Aditya Sinha, AI, analytics and commercial strategy leader.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2f8",
    theme_color: "#6366f1",
    icons: [
      { src: "/favicon.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
