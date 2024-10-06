import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
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
