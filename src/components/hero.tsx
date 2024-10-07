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

export default function Hero() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <div className="flex flex-wrap flex-row items-center gap-2">
          <Avatar className="w-16 h-16">
            <AvatarImage src="https://github.com/pancham555.png" />
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
          Hey there 👋, I am a B.com student who is learning fullstack and
          data-science.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
