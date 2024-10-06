import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto py-5 md:py-10 px-5">
      <Navbar />
      <div className="flex pb-6 space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit">
          <Search />
        </Button>
      </div>
      <div className="grid md:grid-cols-[7fr_3fr] gap-5">
        <div className="grid md:grid-cols-2 gap-5 order-2 md:order-1">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <Card className="border-0" key={i}>
                <Image
                  width={1000}
                  height={600}
                  className="rounded-lg w-full h-48 duration-150 object-cover"
                  src={
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="image"
                />
                <CardHeader className="py-3">
                  <CardTitle className="overflow-ellipsis line-clamp-2 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit, omnis. Itaque, maxime rerum nam consectetur adipisci
                    voluptates optio voluptatibus fugit.
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="overflow-ellipsis line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque dolorum, eum eos maiores ipsam autem porro recusandae
                    voluptatem officia ad!
                  </CardDescription>
                  <div className="py-3">
                    <span className="text-muted-foreground text-sm">
                      Published on: Octuber 05, 2024
                    </span>
                  </div>
                </CardContent>
              </Card>
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
    </div>
  );
}
