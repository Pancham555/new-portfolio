import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import Navbar from "@/components/navbar";
import Markdown from "./components/markdown";
import Image from "@/components/markdown/Image";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) return `Blog not found for slug: ${params.slug}`;
  return { title: blog.title };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return <div>Blog not found for slug: {params.slug}</div>;
  }

  const jsonLd = blog._raw;
  return (
    <main className="max-w-5xl mx-auto py-5 md:py-10 px-5">
      <Navbar />
      <article className="mx-auto py-8">
        <div className="mb-8 text-center">
          <time dateTime={blog.date} className="mb-1 text-sm text-gray-600">
            {format(parseISO(blog.date), "LLLL d, yyyy")}
          </time>
          <h1 className="text-3xl font-bold">{blog.title}</h1>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Image src={blog.image} alt="Top image" />
        <Markdown data={blog.body.code} />
      </article>
    </main>
  );
};

export default BlogLayout;
