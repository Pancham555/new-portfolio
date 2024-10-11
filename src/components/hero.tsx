import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid gap-5">
      <Card>
        <CardHeader className="flex flex-row items-center gap-5">
          <div className="flex flex-wrap flex-row items-center gap-2">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/75246178"
                alt="Profile pic"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>

            <div className="flex flex-row items-center gap-3 my-auto">
              <CardTitle className="inline-block md:text-3xl">Lynx</CardTitle>
              <Badge variant="outline" className="md:text-base">
                Full stack developer
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg">
            <p>
              Hey there 👋, I&apos;m Lynx, an fullstack developer and an
              aspiring businessman.
            </p>
            <p>Here's my Email panchamb63@gmail.com for any queries!</p>
          </CardDescription>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-5">
        <Card>
          <Image
            src={"/profile.jpeg"}
            width={500}
            height={500}
            alt="Profile pic 2nd"
            className="rounded-lg w-full"
          />
        </Card>

        <Card className="min-h-32 p-0">
          <Link
            href="https://ai.zenithstech.com"
            target="_blank"
            aria-label="ai boilerplate"
          >
            <Image
              src={"/blog assets/ai boilerplate.jpeg"}
              width={1000}
              height={1000}
              alt="Profile pic 2nd"
              quality={100}
              className="rounded-lg w-full h-full object-cover"
            />
          </Link>
        </Card>
      </div>
    </div>
  );
}
