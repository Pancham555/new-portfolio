"use client";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import data from "./project-data.json";
import { useState } from "react";

export default function Projects() {
  const [state, setState] = useState("");
  return (
    <div className="max-w-5xl mx-auto py-5 md:py-10 px-5">
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

      <div className="grid md:grid-cols-2 gap-5 order-2 md:order-1">
        {data
          .filter(
            (item) =>
              item.title.toLowerCase().includes(state.toLowerCase()) ||
              item.desc.toLowerCase().includes(state.toLowerCase())
          )
          .map((val, i) => {
            return (
              <Card className="border-0 bg-transparent shadow-none" key={i}>
                <Image
                  width={1000}
                  height={600}
                  className="rounded-lg w-full min-h-48 max-h-72 duration-150 object-cover"
                  src={val.image ?? "/thumbnail.jpeg"}
                  alt="image"
                />
                <CardHeader className="pt-3 pb-0 px-0">
                  <CardTitle className="overflow-ellipsis line-clamp-2 text-lg">
                    {val.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <CardDescription className="overflow-ellipsis line-clamp-4">
                    {val.desc}
                  </CardDescription>
                  <div className="py-3 space-y-2">
                    <div className="text-muted-foreground text-sm">
                      Start date: {val["start-date"]}
                    </div>

                    <div className="text-muted-foreground text-sm">
                      End date: {val["end-date"]}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
