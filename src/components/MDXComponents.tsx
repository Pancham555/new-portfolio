import TOCInline from "pliny/ui/TOCInline.js";
import Pre from "pliny/ui/Pre.js";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm.js";
import type { MDXComponents } from "mdx/types";
import Image from "./Image";
import CustomLink from "./Link";
import TableWrapper from "./TableWrapper";
import { Button } from "./ui/button";

export const components: MDXComponents = {
  // @ts-expect-error The code is correct but it is giving types error
  img: Image,
  TOCInline,
  // @ts-expect-error The code is correct but it is giving types error
  a: CustomLink,
  // @ts-expect-error The code is correct but it is giving types error
  pre: Pre,
  // @ts-expect-error The code is correct but it is giving types error
  table: TableWrapper,
  BlogNewsletterForm,
  h1: ({ children }) => <h1 className="text-4xl font-medium">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl font-medium">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-medium">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl font-medium">{children}</h4>,
  h5: ({ children }) => <h5 className="text-lg font-medium">{children}</h5>,
  h6: ({ children }) => <h6 className="text-sm font-medium">{children}</h6>,
  button: ({ children }) => <Button>{children}</Button>,
  ul: ({ children }) => <ul className="list-disc">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
  // Add more tags here
};
