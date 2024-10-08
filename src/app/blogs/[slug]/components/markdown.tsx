"use client";
import { components } from "@/components/markdown/MDXComponents";

import { MDXLayoutRenderer } from "pliny/mdx-components.js";

export default function Markdown({ data }: { data: string }) {
  return <MDXLayoutRenderer code={data} components={components} />;
}
