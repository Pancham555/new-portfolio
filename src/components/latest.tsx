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
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5 pb-0">
        <CardTitle>Latest</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {blogs.slice(0, 1).map((data, i) => {
          return (
            <Link href={`${data.url}`} key={i}>
              <Card className="border-0">
                <CardHeader className="py-3">
                  <CardTitle className="overflow-ellipsis line-clamp-1 text-lg">
                    {data.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="overflow-ellipsis line-clamp-2">
                    {data.desc}
                  </CardDescription>
                  <div className="flex justify-between gap-5 py-3">
                    <Badge variant="secondary">{data.duration} min read</Badge>
                    <Badge
                      variant="outline"
                      className="items-center flex gap-2 cursor-pointer"
                    >
                      <span>Read</span>
                      <ExternalLink
                        className="text-muted-foreground"
                        size={10}
                      />
                    </Badge>
                  </div>
                  <Image
                    width={1000}
                    height={600}
                    className="rounded-lg w-full min-h-48 max-h-72 duration-150 object-cover"
                    src={data.image ?? "/thumbnail.jpeg"}
                    alt="image"
                  />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
