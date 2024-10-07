import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
export default function Latest() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const firstBlog = blogs[0];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5 pb-0">
        <CardTitle>Latest</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Link href={`${firstBlog.url}`}>
          <Card className="border-0">
            <CardHeader className="py-3">
              <CardTitle className="overflow-ellipsis line-clamp-1 text-lg">
                {firstBlog.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="overflow-ellipsis line-clamp-2">
                {firstBlog.desc}
              </CardDescription>
              <div className="flex justify-between gap-5 py-3">
                <Badge variant="secondary">{firstBlog.duration} min read</Badge>
                <Badge
                  variant="outline"
                  className="items-center flex gap-2 cursor-pointer"
                >
                  <span>Read</span>
                  <ExternalLink className="text-muted-foreground" size={10} />
                </Badge>
              </div>
              <Image
                width={1000}
                height={600}
                className="rounded-lg w-full min-h-48 max-h-72 duration-150 object-cover"
                src={firstBlog.image ?? "/thumbnail.jpeg"}
                alt="image"
              />
            </CardContent>
          </Card>
        </Link>
      </CardContent>
    </Card>
  );
}
