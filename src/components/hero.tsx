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
            <AvatarImage src="/profile.jpeg" alt="Profile pic" />
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
          Hey there 👋, I&apos;m a B.com student who is learning fullstack and
          data-science. I&apos;m a self-taught fullstack developer and till this
          date he has learned several fullstack and data-science technologies
          like HTML, CSS, Javascript, Typescript, Tailwind.css, Bootstrap,
          React.js, React Native, Redux.js, Next.js, Three.js, Node.js, MongoDB,
          SQL, Postgresql, Mongoose.js, PostgresSQL, Express.js, Strapi, Git,
          Github, Python, Flask, Django, Django Rest, Scikit-Learn, Numpy,
          Pandas, Matplotlib, Seaborn, Linux commands, PHP etc and is on
          it&apos;s way to learn several other technologies like the tensorflow
          in the near future!
        </CardDescription>
      </CardContent>
    </Card>
  );
}
