"use client";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { useState } from "react";

export default function Blogs() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const [state, setState] = useState("");
  return (
    <main className="max-w-5xl mx-auto py-5 md:py-10 px-5">
      <Navbar />
      <div className="flex pb-6 space-x-2">
        <Input
          type="search"
          placeholder="Search"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        {/* <Button type="submit">
          <Search />
        </Button> */}
      </div>
      <div className="grid md:grid-cols-[7fr_3fr] gap-5">
        <div className="grid md:grid-cols-2 gap-5 order-2 md:order-1">
          {blogs
            .filter(
              (item) =>
                item.title.toLowerCase().includes(state.toLowerCase()) ||
                item.body.raw.toLowerCase().includes(state.toLowerCase())
            )
            .map((data, i) => {
              return (
                <Link href={`${data.url}`} key={i}>
                  <Card className="border-0 shadow-none bg-transparent">
                    <Image
                      width={1000}
                      height={600}
                      className="rounded-lg w-full h-48 duration-150 object-cover"
                      src={data.image ?? "/thumbnail.jpeg"}
                      alt="image"
                    />
                    <CardHeader className="pt-3 pb-0 px-0">
                      <CardTitle className="overflow-ellipsis line-clamp-2 text-lg">
                        {data.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-0">
                      <CardDescription className="overflow-ellipsis line-clamp-4">
                        {data.desc}
                      </CardDescription>
                      <div className="pb-3">
                        <span className="text-muted-foreground text-sm">
                          Published on:{" "}
                          {format(parseISO(data.date), "LLLL d, yyyy")}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
        </div>
        <div className="order-1 md:order-2">
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-x-2 space-y-2">
              {Array.from({ length: 18 }).map((_, i) => {
                return (
                  <Badge variant="outline" className="cursor-pointer" key={i}>
                    Tag {i + 1}
                  </Badge>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
