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

export default function Latest() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5 pb-0">
        <CardTitle>Latest</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Card className="border-0">
          <CardHeader className="py-3">
            <CardTitle className="overflow-ellipsis line-clamp-1 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              omnis. Itaque, maxime rerum nam consectetur adipisci voluptates
              optio voluptatibus fugit.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="overflow-ellipsis line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolorum, eum eos maiores ipsam autem porro recusandae voluptatem
              officia ad!
            </CardDescription>
            <div className="flex justify-between gap-5 py-3">
              <Badge variant="secondary">2 min read</Badge>
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
              src={
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="image"
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
