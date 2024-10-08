import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    desc: { type: "string", required: false },
    image: { type: "string", required: false, default: "/thumbnail.jpeg" },
    duration: { type: "number", required: false, default: 2 },
    date: { type: "date", required: true, default: String(Date.now()) },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (blog) => `/blogs/${blog._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/app/blogs/data",
  documentTypes: [Blog],
});
