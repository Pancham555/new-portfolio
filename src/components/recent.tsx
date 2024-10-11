import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Recent() {
  return (
    <Card className="bg-gradient-to-tr from-cyan-300 to-emerald-200 p-5 min-h-80 h-auto">
      {/* bg-[url('https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] */}
      <CardHeader>
        <CardTitle>Check out my AI Template here!</CardTitle>
      </CardHeader>
    </Card>
  );
}
