import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export default function Hero() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-5">
        <CardTitle className="inline-block text-3xl">Lynx</CardTitle>
        <Badge variant="outline" className="text-base">
          Full stack developer
        </Badge>
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
