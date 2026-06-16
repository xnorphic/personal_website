import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { buildHomeMetadata } from "@/lib/seo";

export const metadata: Metadata = buildHomeMetadata();

export default function Page() {
  return <HomeClient />;
}
